import React from 'react';
import './Comment.scss';
import { CommentShape } from '../Shapes/CommentShape';

export const Comment = ({ name, body, email }) => (
  <li className="comment">
    <div className="comment__name">{name}</div>
    <div className="comment__body">{body}</div>
    <div className="comment__email">{email}</div>
  </li>
);

Comment.propTypes = CommentShape;
