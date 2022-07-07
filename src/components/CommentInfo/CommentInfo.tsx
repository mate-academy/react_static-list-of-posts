import React from 'react';
import { Comment } from '../../types/Comment';
import './CommentInfo.scss';

type Props = {
  comments: Comment,
};

export const CommentInfo: React.FC<Props> = ({ comments }) => (
  <div className="comment-info">
    <div className="comment-info__title" data-cy="comment-name">
      {comments.name}
    </div>

    <div className="comment-info__body" data-cy="comment-body">
      {comments.body}
    </div>

    <div className="comment-info__email" data-cy="comment-email">
      {comments.email}
    </div>
  </div>
);
