import React from 'react';
import { Comment } from '../types/Comment';
import './CommentInfo.scss';

export const CommentInfo: React.FC<{ comment: Comment; }> = ({ comment }) => (
  <div className="comment">
    <span>
      <strong>Name:</strong>
      {comment.name}
    </span>
    <span>
      <strong>Email:</strong>
      {comment.email}
    </span>
    <span>{comment.body}</span>
  </div>
);
