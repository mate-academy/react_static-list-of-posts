import React from 'react';

import './CommentInfo.scss';
import { Comment } from '../../app.typedef';

interface Props {
  comment: Comment
}

export const CommentInfo: React.FC<Props> = ({ comment }) => (
  <div className="comment">
    <div className="comment__content">
      <h5 className="comment__name" data-cy="comment-name">
        {comment.name}
      </h5>
      <p data-cy="comment-body">
        {comment.body}
      </p>
      <a
        href="email"
        data-cy="comment-email"
        className="comment__email"
      >
        {comment.email}
      </a>
    </div>
  </div>
);
