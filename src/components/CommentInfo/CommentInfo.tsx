import React from 'react';
import { CommentInfoProps } from './CommentInfo.types';

export const CommentInfo: React.FC<CommentInfoProps> = ({
  comment: {
    body,
    email,
    name,
  },
}) => (
  <div className="CommentInfo">
    <div className="CommentInfo__title">
      <strong className="CommentInfo__name">{name}</strong>

      {' by '}

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
