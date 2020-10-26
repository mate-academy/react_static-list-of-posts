import React from 'react';
import './Comment.scss';
import { CommentShape } from '../shapes/CommentShape';

export const Comment = ({ name, body, email }) => (
  <li className="comment">
    <div className="comment__user">
      {name}
    </div>

    <div className="comment__email email">
      <a href={`mailto:${email}`} className="email__link">
        {email}
      </a>
    </div>

    <div className="comment__text">
      {body}
    </div>
  </li>
);

Comment.propTypes = CommentShape;
