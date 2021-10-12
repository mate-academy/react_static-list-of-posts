import React from 'react';
import { Comment } from '../types/Comment';

type Props = {
  comment: Comment;
};

export const CommentInfo: React.FC<Props> = ({ comment }) => {
  return (
    <li className="commentList__Item">
      <p>{comment.name}</p>
      <p>{comment.email}</p>
      <p>{comment.body}</p>
    </li>
  );
};
