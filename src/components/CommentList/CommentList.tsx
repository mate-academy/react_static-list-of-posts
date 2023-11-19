import React from 'react';
import { Comment } from '../../types/Comment';
import { CommentInfo } from '../CommentInfo';

type CommentsProp = {
  comments: Comment[];
};

export const CommentList: React.FC<CommentsProp> = ({ comments }) => {
  return (
    <div className="CommentList">
      {comments.map(comment => <CommentInfo key={comment.id} comment={comment} />)}
    </div>
  );
};
