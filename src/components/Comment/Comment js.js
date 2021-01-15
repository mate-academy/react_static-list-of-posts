import React from 'react';
import { commentType } from '../../types';

export const Comment = ({ name, body, email }) => (
  <div>
    <p>{name}</p>
    <p>{body}</p>
    <p>{email}</p>
  </div>
);

Comment.propTypes = commentType.isRequired;
