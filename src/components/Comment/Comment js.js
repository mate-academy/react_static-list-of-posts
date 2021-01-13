import React from 'react';
import { commentType } from '../../types';

export const Comment = ({ name, body, email }) => (
  <>
    <p>{name}</p>
    <p>{body}</p>
    <p>{email}</p>
  </>
);

Comment.propTypes = commentType.isRequired;
