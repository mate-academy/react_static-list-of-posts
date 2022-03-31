import React from 'react';
import { Comment } from '../../types/comment';

export const CommentInfo: React.FC<Comment> = ({ name, body, email }) => (
  <div className="comment">
    <h3 className="comment__name">{name}</h3>
    <p className="comment__body">{body}</p>
    <div className="comment__email">{email}</div>
  </div>
);
