import React from 'react';
import { Comment } from '../../types/Comment';

type Props = {
  comment: Comment,
  key: number,
};

export const CommentInfo: React.FC<Props> = ({ comment, key }) => (
  <div className="CommentInfo" key={key}>
    <div className="CommentInfo__title">
      <strong className="CommentInfo__name">
        {comment.name}
      </strong>

      by

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
