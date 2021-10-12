import React from 'react';
import { Comment } from '../types/Comment';

export const CommentInfo: React.FC<{ comment: Comment; }> = ({ comment }) => (
  <>
    <div className="comments__name">{comment.name}</div>
    <div className="comments__email">{comment.email}</div>
    <div className="comments__body">{comment.body}</div>
  </>
);
