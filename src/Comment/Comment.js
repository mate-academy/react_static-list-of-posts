import React from 'react';
import { ShapeComment } from '../Shapes';

export const Comment = ({ comment }) => (
  <li>
    <span className="comments__info">
      <span>Name: </span>
      {comment.name}
    </span>
    <span className="comments__info">
      <span>Email: </span>
      {comment.email}
    </span>
    <p>{comment.body}</p>
  </li>
);

Comment.propTypes = ShapeComment.isRequired;
