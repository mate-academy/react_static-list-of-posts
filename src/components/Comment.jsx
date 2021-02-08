import React from 'react';
import { CommentType } from '../types/types';

export const Comment = ({ name, body, email }) => (
  <div className="comment">
    <h3>{name}</h3>
    <p>{body}</p>
    <p>{email}</p>
  </div>
);

Comment.propTypes = CommentType;
