import React from 'react';
import { Comment } from '../types/Comment';

type Props = {
  comment: Comment;
};

export const CommentInfo: React.FC<Props> = ({ comment }) => (
  <>
    <span>{comment.name}</span>
    <span>{comment.body}</span>
    <span>{comment.email}</span>
  </>
);
