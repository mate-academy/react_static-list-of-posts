import React from 'react';
import './Comment.scss';
import { CommentType } from '../../types';

export const Comment = ({
  name,
  email,
  body,
}) => (
  <div className="comment__list">
    <h2>{name}</h2>
    <p>{email}</p>
    <p>{body}</p>
  </div>
);

Comment.propTypes = CommentType;
