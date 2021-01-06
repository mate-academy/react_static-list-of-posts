import React from 'react';
import { TypeComment } from '../shapes/CommentTypes';

export const Comment = ({ name, body, email }) => (
  <div className="comment">
    <h3 className="comment__name">{name}</h3>
    <p className="comment__body">{body}</p>
    <p className="comment__email">{email}</p>
  </div>
);

Comment.propTypes = TypeComment;
