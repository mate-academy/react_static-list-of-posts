import React from 'react';
import './Comment.scss';
import { CommentProp } from '../Types';

export const Comment = ({ name, email, body }) => (
  <div className="comment">
    <h4 className="comment__name">{name}</h4>
    <p className="comment__email">{email}</p>
    <div className="comment__text">{body}</div>
  </div>
);

Comment.propTypes = CommentProp.isRequired;
