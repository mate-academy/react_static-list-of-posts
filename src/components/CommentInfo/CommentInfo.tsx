import React from 'react';
import { Comment } from '../../types/Comment';

import './CommentInfo.scss';

type Props = {
  comment: Comment;
};

export const CommentInfo: React.FC<Props> = ({ comment }) => (
  <div className="comment-info">
    <a
      href={`mailto:${comment.email}`}
      data-cy="comment-email"
      className="comment-info__email"
    >
      {comment.email.toLowerCase()}
    </a>

    <h4 className="comment-info__title" data-cy="comment-name">
      {comment.name[0].toUpperCase() + comment.name.slice(1)}
    </h4>

    <p data-cy="comment-body">
      {comment.body[0].toUpperCase() + comment.body.slice(1)}
    </p>
  </div>
);
