import React from 'react';
import { CommentsPropTypes } from '../Type/type';
import './Comment.scss';

export const Comment = ({ name, email, body }) => (
  <div className="comment__block">
    <div className="comment__name">{name}</div>
    <div className="comment__email">{email}</div>
    <div className="comment__body">{body}</div>
  </div>
);

Comment.propTypes = CommentsPropTypes.isRequired;
