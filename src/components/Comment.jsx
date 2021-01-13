import React from 'react';
import { TypeOfComments } from '../types';

export const Comment = ({ body, name, email }) => (
  <li style={{ borderTop: 'thin solid dodgerblue' }}>
    <p>{body}</p>
    <p>
      Name:
      <strong> {name}</strong>
    </p>
    <p style={{ color: 'blue' }}>{email}</p>
  </li>
);

Comment.propTypes = TypeOfComments;
