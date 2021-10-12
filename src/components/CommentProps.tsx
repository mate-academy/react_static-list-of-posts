import React from 'react';
import { Comment } from '../types/Comment';

type CommentProps = {
  comment: Comment;
};

export const CommentInfo: React.FC<CommentProps> = ({ comment }) => (
  <>
    <span>{comment.name}</span>
    <span>{comment.body}</span>
    <span>{comment.email}</span>
  </>
);
