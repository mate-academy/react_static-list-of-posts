import React from 'react';

import { Comment } from '../../types/Comment';

type Props = {
  comment: Comment;
};

export const CommentInfo: React.FC<Props> = ({ comment }) => {
  const {
    name,
    email,
    body,
  } = comment;

  const emailHref = `mailto:${email}`;

  return (
    <>
      <div className="CommentInfo">
        <div className="CommentInfo__title">
          <strong className="CommentInfo__name">
            odio adipisci rerum aut animi
          </strong>

          {` by ${name}`}

          <a
            className="CommentInfo__email"
            href={emailHref}
          >
            {email}
          </a>
        </div>

        <div className="CommentInfo__body">
          {body}
        </div>
      </div>
    </>
  );
};
