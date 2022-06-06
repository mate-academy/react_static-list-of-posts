import React from 'react';
import { Comment } from '../../typedefs';

import './CommentInfo.scss';

export const CommentInfo: React.FC<Comment> = (comment) => {
  const { name, body, email } = comment;

  return (
    <div>
      <p data-cy="comment-name">{name}</p>
      <p data-cy="comment-body">{body}</p>
      <p data-cy="comment-email">{email}</p>
    </div>
  );
};
