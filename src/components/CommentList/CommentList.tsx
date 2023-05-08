import React from 'react';
import { Comments } from '../../Types/Comment';
import { CommentInfo } from '../CommentInfo';

interface CommentListProps {
  comments: Comments[],
}

export const CommentList: React.FC<CommentListProps> = ({ comments }) => (
  <div className="CommentList">
    {comments.map(comment => (
      <CommentInfo comments={comment} key={comment.id} />
    ))}
  </div>
);
