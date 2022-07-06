import React from 'react';

import './CommentInfo.scss';

type Props = {
  comment: Comment,
};

export const CommentInfo: React.FC<Props> = ({ comment }) => (
  <div className="comment">
    <p
      className="comment__title"
      data-cy="comment-name"
    >
      {`Title: ${comment.name}`}
    </p>

    <p
      className="comment__body"
      data-cy="comment-body"
    >
      {`Comment: ${comment.body}`}
    </p>

    <a
      className="comment__email"
      href={`mailto:${comment.email}`}
      data-cy="comment-email"
    >
      {`Email: ${comment.email}`}
    </a>
  </div>
);
