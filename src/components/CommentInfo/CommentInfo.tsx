import React from 'react';
import './CommentInfo.scss';
import { Comment } from '../../react-app-env';

interface Props {
  comment: Comment;
}

export const CommentInfo: React.FC<Props> = ({ comment }) => (
  <div className="comment">
    <p className="comment__name" data-cy="comment-name">
      {comment.name}
    </p>
    <span className="comment__email" data-cy="comment-email">
      {`Comment by ${comment.email}`}
    </span>
    <p className="comment__body" data-cy="comment-body">
      {comment.body}
    </p>
  </div>
);
