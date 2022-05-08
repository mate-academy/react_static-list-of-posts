import React from 'react';
import { Comment } from '../types/User';
import './CommentInfo.scss';

type Props = {
  comment: Comment;
};

export const CommentInfo: React.FC<Props> = ({ comment }) => {
  return (
    <div className="CommentInfo">
      <strong className="CommentInfo__item" data-cy="comment-name">
        {comment.name}
      </strong>

      <p className="CommentInfo__item" data-cy="comment-body">
        {comment.body}
      </p>

      <p className="CommentInfo__item" data-cy="comment-email">
        {comment.email}
      </p>
    </div>
  );
};
