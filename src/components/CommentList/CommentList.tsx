import React from 'react';
import './CommentList.scss';
import { CommentListProps } from '../../types';
import { CommentInfo } from '../CommentInfo/CommentInfo';

export const CommentList: React.FC<CommentListProps> = ({ comments }) => {
  if (!comments.length) {
    return <b data-cy="NoCommentsMessage">No comments yet</b>;
  }

  return (
    <div className="CommentList">
      {comments.map((comment) => (
        <CommentInfo key={comment.id} comment={comment} />
      ))}
    </div>
  );
};
