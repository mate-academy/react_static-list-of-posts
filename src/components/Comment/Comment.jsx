import React from 'react';
import { commentType } from '../../types';
import './Comment.scss';

export const Comment = ({ body, name, email }) => (
  <li className="comment">
    <h4>
      {name}
    </h4>
    <span className="comment__email">
      {email}
    </span>
    <p>{body}</p>
  </li>
);

Comment.propTypes = commentType;
