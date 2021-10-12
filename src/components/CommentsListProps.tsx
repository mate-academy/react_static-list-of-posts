import React from 'react';
import { Comment } from '../types/Comment';
import { CommentInfo } from './CommentProps';

type CommentsListProps = {
  comments: Comment[];
};

export const CommentsList: React.FC<CommentsListProps> = ({ comments }) => (
  <ul>
    {comments.map(comment => (
      <li>
        <CommentInfo comment={comment} />
      </li>
    ))}
  </ul>
);
