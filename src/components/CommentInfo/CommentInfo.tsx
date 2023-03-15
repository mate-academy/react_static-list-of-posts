import React from 'react';

import { Comment } from '../../types/comment';

type Props = {
  comment: Comment | null;
};

export const CommentInfo: React.FC<Props> = ({ comment }) => (
  <div className="CommentInfo">
    <div className="CommentInfo__title">
      <strong className="CommentInfo__name">
        {comment ? comment.name : null}
      </strong>

      {' by '}

      <a
        className="CommentInfo__email"
        href={`mailto:${comment ? comment.email : null}`}
      >
        {comment ? comment.email : null}
      </a>
    </div>

    <div className="CommentInfo__body">
      {comment ? comment.body : null}
    </div>
  </div>
);
