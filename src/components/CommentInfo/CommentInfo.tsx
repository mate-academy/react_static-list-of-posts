import React from 'react';
import { Comment } from '../../types/comment';

import './CommentInfo.scss';

type Props = {
  comment: Comment,
};

export const CommentInfo: React.FC<Props> = ({ comment }) => (
  <div className="comment">
    <p
      className="comment__title"
      data-cy="comment-name"
    >
      {comment.name}
    </p>

    <p
      className="comment__body"
      data-cy="comment-body"
    >
      {comment.body}
    </p>

    <a
      href={`mailto:${comment.email}`}
      className="comment__email"
      data-cy="comment-email"
    >
      {comment.email}
    </a>
  </div>
);
