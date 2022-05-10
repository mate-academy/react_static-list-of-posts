import React from 'react';
import { Comment } from '../../types/Comment';
import './CommentInfo.scss';

type Props = {
  comment: Comment;
};

export const CommentInfo: React.FC<Props> = ({ comment }) => (
  <>
    <p data-cy="comment-name" className="comments__item-title">
      {comment.name}
    </p>

    <p data-cy="comment-body" className="comments__item-body">
      {comment.body}
    </p>

    <p data-cy="comment-email" className="comments__item-email">
      {`Contact: ${comment.email}`}
    </p>
  </>
);
