import React from 'react';
import { CommentShape } from '../../shapes/CommentShape';
import './Comment.scss';

export const Comment = ({ name, body, email }) => (
  <ul className="comment">
    <li className="comment__item comment__title">
      {name}
    </li>
    <li className="comment__item">
      {`Email: ${email}`}
    </li>
    <li className="comment__item">
      {body}
    </li>
  </ul>
);

Comment.propTypes = CommentShape;
