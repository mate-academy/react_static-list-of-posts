import React from 'react';
import { type Comment } from '../../types/Comment';
import { CommentInfo } from '../CommentInfo';

export const CommentList: React.FC<{ comments: Comment[] }> = ({
  comments,
}) => (
  <div className="CommentList">
    {comments.map((comment: Comment) => (
      <CommentInfo comment={comment} key={comment.id} />
    ))}
  </div>
);
