import React from 'react';
import { Comment } from '../../types/Comment';
import { CommentInfo } from '../CommentInfo';

type Props = {
  comments: Comment[];
};

export const CommentList: React.FC<Props> = ({ comments }) => {
  const hasAnyComments = comments.length > 0;

  return (
    <div className="CommentList">
      {hasAnyComments ? (
        comments.map((comment) => (
          <CommentInfo key={comment.id} comment={comment} />
        ))
      ) : (
        <b data-cy="NoCommentsMessage">No comments yet</b>
      )}
    </div>
  );
};
