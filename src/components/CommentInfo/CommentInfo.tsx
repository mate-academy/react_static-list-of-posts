import React from 'react';
import { PostComment } from '../../types/types';

type Props = {
  comment : PostComment;
};

export const CommentInfo: React.FC<Props> = ({ comment }) => (
  <div key={comment.id}>
    <h2>{comment.name}</h2>
    <p>{comment.body}</p>
  </div>
);
