import React from 'react';
import { CommentInfoProps } from '../../types/CommentInfoProps';

import './CommentInfo.scss';

export const CommentInfo: React.FC<CommentInfoProps> = ({ comment }) => (
  <>
    <p className="comment__title" data-cy="comment-name">
      {comment.name}
    </p>
    <p className="comment__body" data-cy="comment-body">
      {comment.name}
    </p>
    <p className="comment__email" data-cy="comment-email">
      {comment.email.toLowerCase()}
    </p>
  </>
);
