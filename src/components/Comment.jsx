import React from 'react';
import { CommentType } from '../types';

export const Comment = ({ body, name, email }) => (
  <li className="App__comment">
    <p>{body}</p>
    <p>
      Name:
      <strong>
        {' '}
        {name}
      </strong>
    </p>
    <p className="App__email">{email}</p>
  </li>
);

Comment.propTypes = CommentType;
