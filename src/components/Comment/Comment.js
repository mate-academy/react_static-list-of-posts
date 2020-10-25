import React from 'react';
import { CommentShape } from '../../shapes/CommentShape';
import './Comment.scss';

export const Comment = ({ name, body, email }) => (
  <li className="comment">
    <div className="comment__name">{name}</div>
    <div className="comment__body">{body}</div>
    <div className="comment__email">
      email:
      {email}
    </div>
  </li>
);

Comment.propTypes = CommentShape;
