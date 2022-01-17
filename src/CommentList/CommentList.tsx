import React from 'react';
import { CommentInfo } from '../CommentInfo/CommentInfo';

type Props = {
  comments: Comments[];
};

export const CommentList: React.FC<Props> = ({ comments }) => (
  <div>
    {comments.map(comment => (
      <CommentInfo comment={comment} />
    ))}
  </div>
);
