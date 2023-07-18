import React from 'react';
import { CommentInfo } from '../CommentInfo';
import { Comment } from '../../types/Comment';

type CommentListProps = {
  comments: Comment[];
};

export const CommentList: React.FC<CommentListProps> = ({ comments }) => {
  if (comments.length === 0) {
    return <b data-cy="NoCommentsMessage">No comments yet</b>;
  }

  return (
    <div className="CommentList">
      {
        comments.map(
          comment => (
            <CommentInfo comment={comment} key={comment.id} />
          ),
        )
      }
    </div>
  );
};
