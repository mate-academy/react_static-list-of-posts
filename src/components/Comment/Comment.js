import React from 'react';
import './Comment.scss';
import { CommentProp } from '../Types';

export const Comment = ({ name, email, text }) => (
  <div className="comment">
    <h4 className="comment__name">{name}</h4>
    <p className="comment__email">{email}</p>
    <div className="comment__text">{text}</div>
  </div>
);

Comment.propTypes = CommentProp.isRequired;
