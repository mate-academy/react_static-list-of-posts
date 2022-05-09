import React from 'react';
import { Comment } from '../types/Comment';

type Props = {
  comment: Comment
};

export const CommentInfo: React.FC<Props> = ({ comment }) => (
  <div className="comment">
    <div className="comment__name">{comment.name}</div>
    <div className="comment__email">{comment.email}</div>
    <div className="comment__body">{comment.body}</div>
  </div>
);
