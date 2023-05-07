import React from 'react';
import { CommentInfo } from '../CommentInfo';
import { Comment } from '../../types/Comment';

interface PropsComment {
  comments: Comment[],
}

export const CommentList: React.FC<PropsComment> = ({ comments }) => (
  <div className="CommentList">
    {comments.map((comment) => (
      <CommentInfo comment={comment} key={comment.id} />
    ))}
  </div>
);
