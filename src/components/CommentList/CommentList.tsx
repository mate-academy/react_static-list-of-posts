import React from 'react';
import { CommentInfo } from '../CommentInfo';
import { Comment } from '../../types/Comments';

type CommentProps = {
  comments: Comment[];
};

export const CommentList: React.FC<CommentProps> = ({ comments }) => (
  <div className="CommentList">
    {comments.map(comment => (
      <CommentInfo comment={comment} key={comment.id} />
    ))}
  </div>
);
