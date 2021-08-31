import React from 'react';
import { Comment } from '../types/Comment';
import './CommentInfo.scss';

interface Props {
  comment: Comment
}

export const CommentInfo: React.FC<Props> = ({ comment }) => {
  const { name, body, email } = comment;

  return (
    <div className="comment">
      <p className="comment__name">{name}</p>
      <p>{body}</p>
      <p className="comment__email">{email}</p>
    </div>
  );
};
