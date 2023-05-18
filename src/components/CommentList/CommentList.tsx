import React from 'react';
import { CommentInfo } from '../CommentInfo/CommentInfo';
import './CommentList.scss';
import { Comment } from '../../types/Comment';

export const CommentList: React.FC<{ comments: Comment[] }>
= ({ comments }) => {
  if (!comments || comments.length === 0) {
    return <b data-cy="NoCommentsMessage">No comments yet</b>;
  }

  return (
    <div className="CommentList">
      {comments.map(comment => (
        <CommentInfo key={comment.id} comment={comment} />
      ))}
    </div>
  );
};
