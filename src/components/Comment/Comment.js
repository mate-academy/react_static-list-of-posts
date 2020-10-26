import React from 'react';
import { CommentShape } from '../Shapes/CommentsShape';
import './Comment.scss';

export const Comment = ({ name, email, body }) => (
  <li className="comment">
    <h2 className="comment__title">
      {name}
    </h2>
    <h3 className="comment__body">
      {body}
    </h3>
    <h4 className="comment__email">
      {email}
    </h4>
  </li>
);

Comment.propTypes = CommentShape;
