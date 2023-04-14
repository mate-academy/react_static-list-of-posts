import React from 'react';
import { Comment } from '../../types/Comment';
import { CommentInfo } from '../CommentInfo';

interface Props {
  comments: Comment[];
}

export const CommentList: React.FC<Props> = ({ comments }) => {
  const hasComments = comments.length > 0;

  return (
    <div className="className">
      {hasComments
        ? (
          comments.map(comment => (
            <CommentInfo key={comment.id} comment={comment} />
          )))
        : (
          <b data-cy="NoCommentsMessage">No comments yet</b>)}
    </div>
  );
};
