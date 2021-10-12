import React from 'react';
import { CommentType } from '../types/CommentType';

export const CommentInfo: React.FC<{ comment: CommentType; }> = ({ comment }) => {
  const {
    name,
    body,
    email,
  } = comment;

  return (
    <div className="comments__ietm">
      <div className="comments__header">
        <img src="https://via.placeholder.com/48" alt="userava" />
        <div className="comments__header-info">
          <span>{name}</span>
          <span>{email}</span>
        </div>
      </div>
      <div className="comments__body">
        <span>
          {body}
        </span>
      </div>
    </div>
  );
};
