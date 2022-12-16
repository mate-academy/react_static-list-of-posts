import React from 'react';

import { Comment } from '../../types/Comment';

type Props = {
  commentPosted: Comment
};

export const CommentInfo: React.FC<Props> = ({ commentPosted }) => {
  const {
    name,
    email,
    body,
  } = commentPosted;

  return (
    <li className="CommentInfo">
      <div className="CommentInfo__title">
        {name && (
          <strong className="CommentInfo__name">
            {name}
          </strong>
        )}

        {' by '}

        {email && (
          <a
            className="CommentInfo__email"
            href={`mailto:${email}`}
          >
            {email}
          </a>
        )}

      </div>

      {body && (
        <div className="CommentInfo__body">
          {body}
        </div>
      )}
    </li>
  );
};
