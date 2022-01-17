import React from 'react';
import { CommentInfo } from '../CommentInfo/CommentInfo';

type Props = {
  comments: Comments[]
};

export const CommentList: React.FC<Props> = ({ comments }) => (
  <p>
    {comments.map(comment => (
      <CommentInfo comment={comment} />
    ))}
  </p>
);
