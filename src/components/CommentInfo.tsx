import React from 'react';
import { Comment } from '../types/Comment';

type Props = {
  comment: Comment;
};

export const CommentInfo: React.FC<Props> = ({ comment }) => (
  <div className="Info">
    <h3 className="Info__name">{comment.name}</h3>
    <div className="Info__body">{comment.body}</div>
    <h4 className="Info__email">{comment.email}</h4>
  </div>
);
