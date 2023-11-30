import React from 'react';
import './CommentList.scss';
import { CommentInfo } from '../CommentInfo';
import { CommentListProps } from '../../types/CommentListProps';

export const CommentList: React.FC<CommentListProps> = ({ comments }) => {
  if (!comments.length) {
    return <b data-cy="NoCommentsMessage">No comments yet</b>;
  }

  return (
    <div className="CommentList">
      {comments.map(comment => (
        <CommentInfo comment={comment} key={comment.id} />
      ))}
    </div>
  );
};
