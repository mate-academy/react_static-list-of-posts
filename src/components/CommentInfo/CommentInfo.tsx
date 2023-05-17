import React from 'react';

import { Comment } from '../../types/Comment';

type Props = {
  comment: Comment,
};

export const CommentInfo: React.FC<Props> = ({
  comment: {
    name,
    email,
    body,
  },
}) => (
  <div className="CommentInfo">
    <div className="CommentInfo__title">
      <strong className="CommentInfo__name">{name}</strong>
      <span> by </span>
      <a
        className="CommentInfo__email"
        href={`mailto:${email}`}
      >
        {email}
      </a>
    </div>

    <div className="CommentInfo__body">
      {body}
    </div>
  </div>
);
