import React from 'react';
import { Comment } from '../../types/Comment';

type Props = {
  userComment: Comment,
};

export const CommentInfo: React.FC<Props> = ({ userComment }) => {
  const {
    name,
    email,
    body,
  } = userComment;

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
