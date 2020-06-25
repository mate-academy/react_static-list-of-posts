import React from 'react';
import styles from './Comment.module.css';
import { CommentShape } from '../../../Shapes/CommentsShape';

export const Comment = ({ comment }) => {
  const { name, body, email } = comment;

  return (
    <div className={styles.comment}>
      <span>{name}</span>
      <p>{body}</p>
      <p>{email}</p>
    </div>
  );
};

Comment.propTypes = {
  comment: CommentShape.isRequired,
};
