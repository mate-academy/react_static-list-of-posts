import React from 'react';
import { Comment } from '../../types/comments';
import { CommentInfo } from '../CommentInfo';

interface CommentListProps {
  comments: Comment[];
}

export const CommentList: React.FC<CommentListProps> = ({ comments }) => (
  <div className="CommentList">
    {comments.length === 0 ? (
      <>
        <hr />
        <b data-cy="NoCommentsMessage">No comments yet</b>
      </>
    ) : (
      comments.map(comment => (
        <CommentInfo key={comment.id} comment={comment} />
      ))
    )}
  </div>
);
