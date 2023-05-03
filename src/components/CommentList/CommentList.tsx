import React from 'react';
import { Comment } from '../../Types/Comment';
import { CommentInfo } from '../CommentInfo';

type CommentListProps = {
  comments: Comment[],
};

export const CommentList: React.FC<CommentListProps> = ({ comments }) => (
  <div className="CommentList">
    {comments.map(comment => (
      <CommentInfo comment={comment} key={comment.id} />
    ))}
  </div>
);
