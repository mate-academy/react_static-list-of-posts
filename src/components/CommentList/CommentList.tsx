import React from 'react';
import { CommentInfo } from '../CommentInfo/CommentInfo';
import { Comment } from '../types/Comment';

type Props = {
  comments: Comment[];
};

export const CommentList: React.FC<Props> = ({ comments }) => (
  <div>
    <h2>Comments:</h2>
    {comments.map(comment => (
      <div key={comment.id}>
        <CommentInfo comment={comment} />
      </div>
    ))}
  </div>
);
