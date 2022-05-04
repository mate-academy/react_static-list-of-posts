import React from 'react';

import { Comment } from '../../types/types';

type Props = {
  comment: Comment;
};

export const CommentInfo: React.FC<Props> = ({ comment }) => {
  return (
    <div className="commentInfo">
      <p data-cy="comment-name">
        {comment.name}
      </p>
      <p data-cy="comment-body">
        {comment.body}
      </p>
      <p data-cy="comment-email">
        {comment.email}
      </p>
    </div>
  );
};
