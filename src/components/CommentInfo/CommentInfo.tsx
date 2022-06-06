import React from 'react';

import './CommentInfo.scss';

import { Comment } from '../../types';

type Props = {
  comment: Comment,
};

export const CommentInfo: React.FC<Props> = ({ comment }) => (
  <div>
    <div data-cy="comment-name" className="fs-5 text-dark">
      {comment.name}
    </div>
    <span
      role="button"
      data-cy="comment-email"
      className="fs-6 fw-lighter fst-italic text d-inline-block"
    >
      {comment.email}
    </span>
    <p data-cy="comment-body" className="w-50 text-dark fst-italic">
      {comment.body}
    </p>
  </div>
);
