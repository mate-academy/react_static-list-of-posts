import React from 'react';
import './Comment.scss';
import { CommentsTypes } from '../../types/commentsTypes';

export const Comment = ({ comment }) => (
  <div className="comment">
    <p className="comment__name">
      author:
      <strong>{comment.name}</strong>
    </p>
    <p className="comment__body">{comment.body}</p>
    <p className="comment__mail">{comment.email}</p>
  </div>
);

Comment.propTypes = {
  comment: CommentsTypes.isRequired,
};
