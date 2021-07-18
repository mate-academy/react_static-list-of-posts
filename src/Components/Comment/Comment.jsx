import React from 'react';
import { commentTypes } from '../../types';
import './Comment.scss';

export const Comment = ({ comment }) => (
  <>
    <p>
      <span className="comment__info">{'Name: '}</span>
      {comment.name}
    </p>
    <p>{comment.body}</p>
    <p>
      <span className="comment__info">{'Email: '}</span>
      {comment.email}
    </p>
  </>
);

Comment.defaultProps = {
  comment: '',
};

Comment.propTypes = {
  comment: commentTypes,
};
