import React from 'react';
import { Comment } from '../../types/Comment';

import './CommentInfo.scss';

type Props = {
  comment: Comment;
};

export const CommentInfo: React.FC<Props> = ({ comment }) => (
  <div className="comment__info">
    <div className="CommentInfo__title">
      <strong className="CommentInfo__name" data-cy="comment-name">
        {comment.name}
      </strong>

      {' by '}

      <a
        className="CommentInfo__email"
        data-cy="comment-email"
        href={comment.email}
      >
        {comment.email}
      </a>
    </div>

    <div className="CommentInfo__body" data-cy="comment-body">
      {comment.body}
    </div>
  </div>
);
