import React from 'react';
import './Comment.scss';
import { CommentShape } from '../shapes/CommentShape';

export const Comment = ({ name, body, email }) => (
  <li className="comment">
    <div className="comment__user">
      {name}
    </div>
    <div className="comment__user">
      <a href={`mailto:${email}`}>
        {email}
      </a>
    </div>
    <div className="comment__text">
      {body}
    </div>
  </li>
);

Comment.propTypes = CommentShape;
