import React from 'react';
import { CommentPropTypes } from './PropsTypes';

export const Comment = ({ name, body, email }) => (
  <>
    <h3>{name}</h3>
    <p>{body}</p>
    <p>{email}</p>
  </>
);

Comment.propTypes = CommentPropTypes;
