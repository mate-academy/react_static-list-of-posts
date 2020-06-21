import React from 'react';
import PropType from 'prop-types';
import styles from './Comment.module.css';

export const Comment = props => (
  <div className={styles.comment}>
    <span>{props.comment.name}</span>
    <p>{props.comment.body}</p>
    <p>{props.comment.email}</p>
  </div>
);

Comment.propTypes = {
  comment: PropType.shape({
    name: PropType.string.isRequired,
    body: PropType.string.isRequired,
    email: PropType.string.isRequired,
  }).isRequired,
};
