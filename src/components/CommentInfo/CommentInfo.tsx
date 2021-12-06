import React from 'react';
import { Comment } from '../../types/Comment';

import './CommentInfo.scss';

type Props = {
  comment: Comment;
};

export const CommentInfo:React.FC<Props> = ({ comment }) => {
  return (
    <div className="comments__block">
      <h2 className="comments__name">{comment.name}</h2>
      <div className="comments__text">{comment.body}</div>
      <div className="comments__email">{comment.email}</div>
    </div>
  );
};
