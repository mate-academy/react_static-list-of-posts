import React from 'react';
import { Comment } from '../../app.typedef';

import './CommentInfo.scss';

interface Props {
  comment: Comment;
}

export const CommentInfo: React.FC<Props> = ({ comment }) => {
  const {
    name,
    body,
    email,
  } = comment;

  return (
    <div className="comment-info">
      <h5 data-cy="comment-name">
        {name}
      </h5>
      <p data-cy="comment-body">
        {body}
      </p>
      <p data-cy="comment-email">
        By
        {' : '}
        {email}
      </p>
    </div>
  );
};
