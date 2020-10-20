import React from 'react';
import { User } from '../User/User';
import { CommentList } from '../CommentList/CommentList';
import styles from './Post.module.css';
import { PostShape } from '../../Shapes/PostShape';

export const Post = ({ post }) => {
  const { title, body, user, comments } = post;

  return (
    <div className={styles.post}>
      <h3>{title}</h3>
      <p className={styles.body}>{body}</p>
      <User {...user} />
      <CommentList comments={comments} />
    </div>
  );
};

Post.propTypes = {
  post: PostShape.isRequired,
};
