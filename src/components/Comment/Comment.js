import React from 'react';
import { CommentPropTypes } from '../../propTypes/CommentPropTypes';
import './Comment.scss';

export function Comment({ name, email, body }) {
  return (
    <div className="comment">
      <div className="comment-author-name">{name}</div>
      <div className="comment-text">{body}</div>
      <div className="comment-author-email">{email}</div>
    </div>
  );
}

Comment.propTypes = CommentPropTypes;
