import React from 'react';
import { CommentShape } from '../../shapes';
import './comment.css';

export const Comment = ({ comment }) => (
  <div className="comment">
    <span className="comment__name">{comment.name}</span>
    <a className="comment__email" href={`mailto:${comment.email}`}>
      {comment.email}
    </a>
    <p className="text">{comment.body}</p>
  </div>
);

Comment.propTypes = {
  comment: CommentShape.isRequired,
};
