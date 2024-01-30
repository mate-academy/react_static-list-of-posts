import React from 'react';
import { Comment } from '../../types';

type Props = {
  commemt: Comment
};

export const CommentInfo: React.FC<Props> = ({ commemt }) => {
  const {
    name,
    email,
    body,
  } = commemt;

  return (
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
};
