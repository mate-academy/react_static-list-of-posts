import React from 'react';
import { Comment } from '../../types/Comment';

type CommentProps = {
  comment: Comment;
};

export const CommentInfo: React.FC<CommentProps> = ({ comment }) => (
  <>
    <p>{comment.name}</p>
    <p>{comment.body}</p>
    <p>{comment.email}</p>
  </>
);
