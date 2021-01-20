import React from 'react';
import { CommentTypes } from '../../types';

export const Comment = ({
  name,
  body,
  email,
}) => (
  <div className="comment">
    <h4>{name}</h4>
    <p className="comment-description">{body}</p>
    <p className="comment-email">{email}</p>
  </div>
);

Comment.propTypes = CommentTypes.isRequired;
