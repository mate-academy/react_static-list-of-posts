import React from 'react';
import { CommentType } from '../../types';

export const Comment = ({
  name,
  body,
  email,
}) => (
  <>
    <h4>{name}</h4>
    <p>{body}</p>
    <a href={`mailto:${email}`}>{email}</a>
  </>
);

Comment.propTypes = CommentType;
