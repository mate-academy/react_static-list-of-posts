import React from 'react';
import { Comment } from '../../types/Comment';
import { CommentInfo } from '../CommentInfo';

type CommentListProps = {
  comments: Comment[];
};

export const CommentList: React.FC<CommentListProps> = ({ comments }) => (
  <ul className="CommentList">
    {comments.map(comment => (
      <li>
        <CommentInfo key={comment.id} comment={comment} />
      </li>
    ))}
  </ul>
);
