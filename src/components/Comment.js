import React from 'react';
import { CommentShape } from './Shapes/CommentShape';

export const Comment = ({ name, body, email }) => (
  <>
    <span className="comment__name">{name}</span>
    <span className="comment__body">{body}</span>
    <span className="comment__email">{email}</span>
  </>
);

Comment.propTypes = CommentShape;
