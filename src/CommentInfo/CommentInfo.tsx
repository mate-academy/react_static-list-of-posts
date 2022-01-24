import React from 'react';
import './CommentInfo.scss';

type Props = {
  comment: Comment,
};

export const CommentInfo: React.FC<Props> = ({ comment }) => (
  <>
    <div className="comment">
      <p className="comment__name">{comment.name}</p>
      <p className="comment__email">{comment.email}</p>
      <p>{comment.body}</p>
    </div>
  </>
);
