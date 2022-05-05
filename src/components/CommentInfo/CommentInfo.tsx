import React from 'react';

import { Comment } from '../../types/interfaces';

type Props = {
  comment: Comment,
};

export const CommentInfo: React.FC<Props> = ({ comment }) => (
  <div className="comment-info">
    <h3 className="comment-info__name" data-cy="comment-name">
      {comment.name}
    </h3>
    <p className="comment-info__email" data-cy="comment-email">
      {comment.email}
    </p>
    <p className="comment-info__body" data-cy="comment-body">
      {comment.body}
    </p>
  </div>
);
