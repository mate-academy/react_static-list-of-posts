import React from 'react';
import { Comment } from '../types/Comment';
import { CommentInfo } from '../CommentInfo';

type Props = {
  comments: Comment[] | null,
};

export const CommentList: React.FC<Props> = ({ comments }) => (
  <>
    {comments?.map(comment => (
      <CommentInfo comment={comment} />
    ))}
  </>
);
