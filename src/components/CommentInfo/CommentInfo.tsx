import React from 'react';
import { CommentInfoType } from '../../type/comment';

export const CommentInfo: React.FC<CommentInfoType> = ({
  comment: {
    name,
    email,
    body,
  },
}) => (
  <>
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
  </>
);
