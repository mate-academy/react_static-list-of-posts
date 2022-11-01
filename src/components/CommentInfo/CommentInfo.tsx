import React from 'react';

import { Comment } from '../../types/Comment';

type PropsCom = {
  comment: Comment;
};

export const CommentInfo: React.FC<PropsCom> = ({ comment }) => {
  const { name, body, email } = comment;

  return (
    <div className="CommentInfo">
      <div className="CommentInfo__title">
        <strong className="CommentInfo__name">
          {name}
        </strong>

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
