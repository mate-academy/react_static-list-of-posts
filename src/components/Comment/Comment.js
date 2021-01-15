import React from 'react';
import './Comment.scss';
import { TypeComment } from '../../types';

export const Comment = ({ comment }) => (
  <div className="comment">
    <p className="comment__header">{comment.name}</p>
    <p className="comment__text">{comment.body}</p>
    <a
      href={`mailto:${comment.email}`}
      className="comment__email"
    >
      {comment.email}
    </a>
  </div>
);

Comment.propTypes = {
  comment: TypeComment.isRequired,
};
