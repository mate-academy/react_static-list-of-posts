import React from 'react';
import { Comment } from '../../react-app-env';
import './CommentInfo.scss';

interface Props {
  comment: Comment | undefined;
}

export const CommentInfo: React.FC<Props> = ({ comment }) => (
  <div className="commentInfo">
    <p data-cy="comment-name">
      <strong>Commented by:</strong>
      {' '}
      {comment ? comment.name : 'Undefined'}
    </p>
    <p data-cy="comment-body">
      <strong>Comment:</strong>
      {' '}
      {comment ? comment.body : '...'}
    </p>
    <p data-cy="comment-email">
      <strong>Email:</strong>
      {' '}
      {comment ? comment?.email : 'Undefined'}
    </p>
  </div>
);
