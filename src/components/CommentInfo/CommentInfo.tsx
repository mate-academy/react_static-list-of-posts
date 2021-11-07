import React from 'react';
import { Comment } from '../../types/types';
import './CommentInfo.scss';

interface Props {
  comment: Comment,
}

export const CommentInfo: React.FC<Props> = ({ comment }) => (
  <div className="comments">
    <p className="comments__name">{comment.name}</p>
    <p className="comments__body">{comment.body}</p>
    <p className="comments__email">{comment.email}</p>
  </div>
);
