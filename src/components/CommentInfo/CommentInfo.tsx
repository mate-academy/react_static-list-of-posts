import React from 'react';
import { Comment } from '../../types/Comment';

import './CommentInfo.scss';

type Props = {
  comment: Comment;
};

export const CommentInfo: React.FC<Props> = ({ comment }) => (
  <div className="comment">
    <h3 className="comment__name" data-cy="comment-name">
      {comment.name}
    </h3>
    <a href={`mailto:${comment.email}`} className="comment__email" data-cy="comment-email">
      {comment.email}
    </a>
    <p className="comment__text" data-cy="comment-body">
      {comment.body}
    </p>
  </div>
);
