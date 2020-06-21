import React from 'react';
import PropType from 'prop-types';
import { User } from '../User/User';
import { CommentList } from '../CommentList/CommentList';
import styles from './Post.module.css';

export const Post = props => (
  <div className={styles.post}>
    <h3>{props.post.title}</h3>
    <p className={styles.body}>{props.post.body}</p>
    <User {...props.post.user} />
    <CommentList comment={props.post.comments} />
  </div>
);

Post.propTypes = {
  post: PropType.shape({
    title: PropType.string.isRequired,
    body: PropType.string.isRequired,
    user: PropType.objectOf.isRequired,
    comments: PropType.arrayOf.isRequired,
  }).isRequired,
};
