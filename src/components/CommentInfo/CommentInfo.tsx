import React from 'react';
import { Comment } from '../../types/Comment';

import './CommentInfo.scss';

type Props = {
  comment: Comment,
};

export const CommentInfo: React.FC<Props> = ({ comment }) => (
  <div className="comment">
    <div className="comment__head">
      <p className="comment__name">
        {comment.name}
      </p>

      <a
        href={`mailto:${comment.email}`}
        className="comment__email"
        data-cy="comment-email"
      >
        {comment.email}
      </a>
    </div>

    <p className="comment__body" data-cy="comment-body">
      {comment.body}
    </p>
  </div>
);
