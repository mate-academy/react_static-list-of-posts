import React from 'react';
import { Comment } from '../../types/comment';
import { CommentInfo } from '../CommentInfo/CommentInfo';

type Props = {
  comments: Comment[];
};

export const CommentList: React.FC<Props> = ({ comments }) => {
  const hasComments = comments.length > 0;

  return (
    <div className="CommentList">
      {hasComments ? (
        comments.map((comment) => (
          <CommentInfo comment={comment} key={comment.id} />
        ))
      ) : (
        <b data-cy="NoCommentsMessage">
          No comments yet
        </b>
      )}
    </div>
  );
};
