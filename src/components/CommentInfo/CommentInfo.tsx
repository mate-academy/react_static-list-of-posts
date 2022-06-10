import React from 'react';
import { CommentInfoProps } from '../../types/CommentInfoProps';

import './CommentInfo.scss';

export const CommentInfo: React.FC<CommentInfoProps> = ({ comment }) => (
  <>
    <p className="comment__title" data-cy="comment-name">
      {comment.name[0].toUpperCase() + comment.name.slice(1)}
    </p>
    <p className="comment__body" data-cy="comment-body">
      {comment.body[0].toUpperCase() + comment.body.slice(1)}
    </p>
    <p className="comment__email" data-cy="comment-email">
      {comment.email.toLowerCase()}
    </p>
  </>
);
