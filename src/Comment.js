import React from 'react';
import { CommentShape } from './shapes/CommentShape';

export const Comment = ({ name, body, email }) => (
  <div className="comment">
    <div className="comment__author">{name}</div>
    <div className="comment__body">{body}</div>
    <div className="comment__email">{email}</div>
  </div>
);

Comment.propTypes = CommentShape;
