import React from 'react';
import { Comment } from '../types/Comment';

type Props = {
  comment: Comment
};

export const CommentInfo: React.FC<Props> = ({ comment }) => (
  <>
    <p>{comment.name}</p>
    <p>{comment.body}</p>
    <p>{comment.email}</p>
  </>
);
