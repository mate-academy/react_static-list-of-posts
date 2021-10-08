import React from 'react';
import { Comment } from '../../Types';
import './Style.css';

type Props = {
  comment: Comment,
};
export const CommentInfo: React.FC<Props> = ({ comment }) => {
  return (
    <div className="list-comment-info">
      <p className="comment-item">{comment.name}</p>
      <p className="comment-item">{comment.body}</p>
      <p className="comment-item">{comment.email}</p>
    </div>
  );
};
