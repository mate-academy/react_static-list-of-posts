import React from 'react';
import { commentType } from '../../types';
import './Comment.scss';

export const Comment = ({ comment }) => (
  <div className="comment">
    <h5 className="comment__name">
      {comment.name}
    </h5>
    <p className="comment__text">
      {comment.body}
    </p>
    <p className="comment__email">
      {comment.email}
    </p>
  </div>
);

Comment.propTypes = {
  comment: commentType.isRequired,
};
