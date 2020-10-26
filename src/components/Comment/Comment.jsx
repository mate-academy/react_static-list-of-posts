import React from 'react';
import { CommentShape } from '../../shapes/CommentShape';
import './Comment.scss';

export const Comment = ({ name, body, email }) => (
  <ul className="comments__item">
    <li className="comments__name">
      {name}
    </li>
    <li className="comments__email">
      {`Email: ${email}`}
    </li>
    <li className="comments__body">
      {body}
    </li>
  </ul>
);

Comment.propTypes = CommentShape;
