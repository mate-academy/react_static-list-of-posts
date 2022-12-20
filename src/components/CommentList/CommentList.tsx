import React from 'react';
import { Comment } from '../../Interfaces/Comment';
import { CommentInfo } from '../CommentInfo';

type CommentsProps = {
  comments: Comment[];
};

export const CommentList: React.FC<CommentsProps> = ({ comments }) => (
  <ul className="CommentList">
    {comments.map((comment) => (
      <CommentInfo comment={comment} key={comment.id} />
    ))}
  </ul>
);
