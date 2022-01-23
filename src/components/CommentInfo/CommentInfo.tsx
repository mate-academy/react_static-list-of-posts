import React from 'react';
import './CommentInfo.scss';

type CommentProps = {
  comment: CommentType,
};

export const CommentInfo: React.FC<CommentProps> = ({ comment }) => (
  <>
    <p className="comment__name">{comment.name}</p>
    <p className="comment__body">{comment.body}</p>
  </>
);
