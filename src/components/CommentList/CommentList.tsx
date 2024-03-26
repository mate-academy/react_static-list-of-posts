import React from 'react';
import { Comment } from '../CommentInfo/index';
import { CommentInfo } from '../CommentInfo';

type CommentListProps = {
  comments: Comment[] | undefined;
};

export const CommentList: React.FC<CommentListProps> = ({ comments }) => {
  return (
    <div className="CommentList">
      {comments?.map(comment => (
        <CommentInfo key={comment.id} comment={comment} />
      ))}
    </div>
  );
};
