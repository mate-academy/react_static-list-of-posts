import React from 'react';
import { CommentInfo } from '../CommentInfo';
import { Comment } from '../../types/Comment';

type CommentsProps = {
  comments: Comment[];
};

export const CommentList: React.FC<CommentsProps> = ({ comments }) => (
  <ul className="CommentList">
    {comments.map((comment: Comment) => (
      <CommentInfo key={comment.id} comment={comment} />
    ))}
  </ul>
);
