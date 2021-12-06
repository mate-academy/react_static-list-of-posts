import React from 'react';

import { Comment } from '../../types/comments';

type Props = {
  comment: Comment;
};

export const CommentInfo:React.FC<Props> = ({ comment }) => {
  return (
    <>
      <div className="comments__block">
        <div className="comments__name">{comment.name}</div>
        <div className="comments__text">{comment.body}</div>
        <div className="comments__email">{comment.email}</div>
      </div>
    </>
  );
};
