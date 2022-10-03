import React from 'react';
import { Comment } from '../../Interfaces/Comment';
import { CommentInfo } from '../CommentInfo';

type CommentsProps = {
  comments: Comment[];
};

export const CommentList: React.FC<CommentsProps> = ({ comments }) => (
  <div className="CommentList">
    {comments.map((comment) => (<CommentInfo comment={comment} />))}
  </div>
);
