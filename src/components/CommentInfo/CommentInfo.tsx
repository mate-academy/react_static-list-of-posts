import React from 'react';
import './CommentInfo.scss';

import { Comment } from '../types';

type Props = {
  comment: Comment,
};

export const CommentInfo: React.FC<Props> = ({ comment }) => (
  <div className="comment">
    <p className="comment-title" data-cy="comment-email">
      <span className="comment__title-name" data-cy="comment-name">
        {`${comment.name} `}
      </span>
      (
      {comment.email}
      )
    </p>
    <p className="comment__body" data-cy="comment-body">{comment.body}</p>
  </div>
);
