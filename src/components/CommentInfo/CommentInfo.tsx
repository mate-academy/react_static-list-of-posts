import React from 'react';
import { Comment } from '../../app.typedef';

import './CommentInfo.scss';

type Props = {
  comment: Comment;
};

export const CommentInfo: React.FC<Props> = ({ comment }) => {
  const { name, body, email } = comment;

  return (
    <div className="comment-info">
      <h3 data-cy="comment-name" className="comment-name">{name}</h3>
      <p data-cy="comment-body" className="comment-body">{body}</p>
      <p data-cy="comment-email" className="comment-email">{email}</p>
    </div>
  );
};
