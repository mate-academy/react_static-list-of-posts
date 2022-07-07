import React from 'react';
import { Comment } from '../../types/Comment';

import './CommentInfo.scss';

type Props = {
  comment: Comment,
};

export const CommentInfo: React.FC<Props> = ({ comment }) => (
  <>
    <div className="comment" key={comment.id}>
      <p className="comment__name" data-cy="comment-name">
        <strong>Theme: </strong>
        {comment.name}
      </p>

      <p className="comment__body" data-cy="comment-body">
        <strong>Comment: </strong>
        {comment.body}
      </p>

      <a
        href={`mailto:${comment.email}`}
        className="comment__email"
        data-cy="comment-email"
      >
        {`User: ${comment.email}`}
      </a>
    </div>
  </>
);
