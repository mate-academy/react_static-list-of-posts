import React from 'react';
import { Comment } from '../types';
import './CommentInfo.scss';

interface Props {
  comment: Comment;
}

export const CommentInfo: React.FC<Props> = ({ comment }) => {
  return (
    <div className="CommentInfo">
      <p className="CommentInfo__email">{comment.email}</p>
      <div className="CommentInfo__name">{comment.name}</div>
      <span className="CommentInfo__body">{comment.body}</span>
    </div>
  );
};
