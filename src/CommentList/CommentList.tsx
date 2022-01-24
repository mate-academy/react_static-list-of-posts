import React from 'react';
import { CommentInfo } from '../CommentInfo/CommentInfo';

type Props = {
  comments: Comment[]
};

export const CommentList: React.FC<Props> = ({ comments }) => (
  <p className="comment">
    {comments.map(comment => (
      <span key={comment.id}>
        <CommentInfo comment={comment} />
      </span>
    ))}
  </p>
);
