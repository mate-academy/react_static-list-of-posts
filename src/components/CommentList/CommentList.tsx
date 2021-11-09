import React from 'react';
import { Comment } from '../../types/Comment';
import { CommentInfo } from '../CommentInfo/CommentInfo';

type CommentListProps = {
  comments: Comment[]
};

export const CommentList: React.FC<CommentListProps> = ({ comments }) => (
  <ul>
    {comments.map(comment => (
      <li key={comment.id}>
        <CommentInfo comment={comment} />
      </li>
    ))}
  </ul>
);
