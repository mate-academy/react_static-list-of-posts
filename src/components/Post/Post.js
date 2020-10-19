import React from 'react';
import { PostShape } from './PostShape';
import User from '../User/User';
import users from '../../api/users';
import CommentList from '../CommentList/CommentList';
import styles from './Post.module.css';

const Post = ({ post }) => {
  const userCopy = { ...users.find(user => user.id === post.userId) };

  return (
    <li className={styles.post}>
      <h1>
        {post.title}
      </h1>
      <p>
        {post.body}
      </p>
      <User key={post.userId} user={userCopy} />
      <CommentList key={post.id} id={post.id} />
    </li>
  );
};

Post.propTypes = PostShape.isRequired;

export default Post;
