import React from 'react';
import { CommentInfo } from '../CommentInfo/CommentInfo';

type Props = {
  comments: CommentItem[],
};

export const CommentList: React.FC<Props> = ({ comments = [] }) => (
  <div className="posts">
    {comments.map(comment => (
      <CommentInfo comment={comment} />
    ))}
  </div>
);
