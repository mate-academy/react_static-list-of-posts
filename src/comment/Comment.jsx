import React from 'react';
import { CommentType } from '../types';
import './Comment.scss';

export const Comment = ({ name, body, email }) => (
  <div className="comment">
    <p>{name}</p>
    <p>{body}</p>
    <p>
      <span className="comment-email">comment from: </span>
      <a href={`mailto:${email}`}>{email}</a>
    </p>
    <hr />
  </div>
);

Comment.propTypes = CommentType.isRequired;
