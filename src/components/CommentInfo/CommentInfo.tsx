import React from 'react';
import { CommentsT } from '../../types';

type Props = {
  comments: CommentsT
};

export const CommentInfo: React.FC<Props> = ({ comments }) => {
  const {
    email,
    body,
  } = comments;

  return (
    <div className="CommentInfo">
      <div className="CommentInfo__title">
        <strong className="CommentInfo__name">pariatur omnis in</strong>

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
