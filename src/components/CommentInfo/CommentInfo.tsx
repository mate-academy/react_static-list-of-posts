import React from 'react';

import { Comment } from '../../react-app-env';
import './CommentInfo.scss';

interface Props {
  comment: Comment | undefined;
}

export const CommentInfo: React.FC<Props> = ({ comment }) => (
  <div className="commentInfo">
    <p data-cy="comment-name">
      <strong>CommentBy: </strong>

      {comment ? comment.name : 'Unknown'}
    </p>

    <p data-cy="comment-body">
      Comment:
      {' '}
      {comment ? comment.body : 'No comments'}
    </p>

    <p data-cy="comment-email">
      Email:
      {' '}
      {comment ? comment.email : 'Unknown'}
    </p>
  </div>
);
