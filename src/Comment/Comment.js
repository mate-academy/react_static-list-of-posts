import React from 'react';
import './Comment.css';
import { commentShape } from '../shapes';

const Comment = ({ comment }) => (
  <li className="post__comments-item">
    <span className="post__comments-info">
      <span>Name: </span>
      {comment.name}
    </span>
    <span className="post__comments-info">
      <span>Email: </span>
      {comment.email}
    </span>
    <br />
    <p>{comment.body}</p>
  </li>
);

Comment.propTypes = commentShape.isRequired;

export { Comment };
