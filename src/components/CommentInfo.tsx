import React from 'react';
import { Comment } from '../types/Comment';

export const CommentInfo: React.FC<{ comment: Comment }> = ({ comment }) => (
  <div className="CommentInfo">
    <h4 className="CommentInfo-Name">{comment.name}</h4>
    <div className="CommentInfo-Body">{comment.body}</div>
    <div className="CommentInfo-Email">{comment.email}</div>
  </div>

);
