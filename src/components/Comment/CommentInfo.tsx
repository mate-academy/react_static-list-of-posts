import React from 'react';
import { Comment } from '../User';

type Props = {
  comment: Comment;
};

export const CommentInfo: React.FC<Props> = ({ comment }) => {
  return (
    <div className="CommentInfo">
      <p className="CommentInfo__item" data-cy="comment-name">
        {comment.name}
      </p>

      <p className="CommentInfo__item" data-cy="comment-body">
        <span>
          {comment.body}
        </span>
      </p>

      <p className="CommentInfo__item" data-cy="comment-email">
        {comment.email}
      </p>
    </div>
  );
};
