import React from 'react';
import { CommentTypes } from '../types';

export const Comment = ({ name, body, email }) => (
  <>
    <p>{name}</p>
    <p>{body}</p>
    <p>{email}</p>
  </>
);

Comment.propTypes = CommentTypes.isRequired;
