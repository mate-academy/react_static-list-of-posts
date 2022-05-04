import React from 'react';
import { Comment } from '../type/comment';
import './CommentInfo.scss';

type Props = {
  comment: Comment
};

export const CommentInfo: React.FC<Props> = ({ comment }) => (
  <div className="comment-info">
    <p data-cy="comment-name" className="comment-info__name">{comment.name}</p>
    <p data-cy="comment-body" className="comment-info__body">{comment.body}</p>
    <p
      data-cy="comment-email"
      className="comment-info__email"
    >
      {comment.email}
    </p>
  </div>
);
