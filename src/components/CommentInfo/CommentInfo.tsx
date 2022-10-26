import React from 'react';
import './CommentInfo.scss';
import { Comment } from '../../types/Comment';

type Props = {
  comment: Comment;
};

export const CommentInfo: React.FC<Props> = ({ comment }) => (
  <div className="comments">
    <h1 data-cy="comment-name" className="comment-name">
      {comment.name}
    </h1>

    <div data-cy="comment-body">
      {comment.body}
    </div>

    <p data-cy="comment-email">
      {comment.email}
    </p>
  </div>
);
