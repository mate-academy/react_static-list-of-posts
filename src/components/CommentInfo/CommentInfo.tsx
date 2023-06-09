import React from 'react';
import { Comments } from '../../types/Comments';

interface Props {
  comment: Comments,
}

export const CommentInfo: React.FC<Props> = ({ comment }) => (
  <div className="CommentInfo">
    <div className="CommentInfo__title">
      <strong className="CommentInfo__name">{comment.name}</strong>

      {' by '}

      <a
        className="CommentInfo__email"
        href={`mailto:${comment.email}`}
      >
        {comment.email}
      </a>
    </div>

    <div className="CommentInfo__body">
      {comment.body}
    </div>
  </div>
);
