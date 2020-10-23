import React from 'react';
import { CommentShape } from '../shapes/CommentShape';

export const Comment = ({ name, body, email }) => (
  <li className="CommentList__item">
    <p className="CommentList__name">{name}</p>
    <p className="CommentList__text">{body}</p>
    <p>{`Email: ${email}`}</p>
  </li>
);

Comment.propTypes = CommentShape;
