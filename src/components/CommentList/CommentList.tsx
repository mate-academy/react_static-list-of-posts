import React from 'react';
import { PostComment } from '../../types/types';
import { CommentInfo } from '../CommentInfo';

type Props = {
  comments: PostComment[];
};

export const CommentList: React.FC<Props> = ({ comments }) => (
  <div>
    {comments.map((comment) => (
      <CommentInfo comment={comment} />
    ))}

  </div>
);
