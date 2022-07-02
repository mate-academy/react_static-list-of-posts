import React from 'react';

import './CommentInfo.scss';
import Comment from '../../types/Comment';

type Props = {
  comment: Comment
};

export const CommentInfo: React.FC<Props> = ({ comment }) => (
  <>
    <div className="comment">
      <div className="comment__head">
        <a
          href={`mailto:${comment.email}`}
          className="comment__email"
          data-cy="comment-email"
        >
          {comment.email}
        </a>
        <h2 className="comment__name" data-cy="comment-name">
          {comment.name}
        </h2>
      </div>
      <p className="comment__body" data-cy="comment-body">
        {comment.body}
      </p>
    </div>
  </>
);
