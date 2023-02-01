import React from 'react';
import { CommentType } from '../../types/CommentType';
import { CommentInfo } from '../CommentInfo';

type CommentListProps = {
  comments: CommentType[];
};

export const CommentList: React.FC<CommentListProps> = ({ comments }) => {
  return (
    <div className="CommentList">
      {comments.map(comment => (
        <CommentInfo comment={comment} key={comment.id} />
      ))}
    </div>
  );
};
