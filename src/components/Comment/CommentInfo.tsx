import React from 'react';
import { Comment } from '../User';
import './Comment.scss';

type Props = {
  comment: Comment | null;
};

export const CommentInfo: React.FC<Props> = ({ comment }) => {
  return (
    <div className="CommentInfo">
      <p className="CommentInfo__item" data-cy="comment-name">
        {comment ? comment.name : null}
      </p>

      <p className="CommentInfo__item" data-cy="comment-body">
        <span>
          {comment ? comment.body : null}
        </span>
      </p>

      <p className="CommentInfo__item" data-cy="comment-email">
        {comment ? comment.email : null}
      </p>
    </div>
  );
};
