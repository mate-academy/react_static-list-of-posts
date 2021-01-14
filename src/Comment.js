import React from 'react';
import { CommentType } from './types';

export const Comment = ({ name, body, email }) => (
  <div>
    <p><strong>{name}</strong></p>
    <p>{body}</p>
    <p><em>{email}</em></p>
    <hr />
  </div>
);

Comment.propTypes = CommentType.isRequired;
