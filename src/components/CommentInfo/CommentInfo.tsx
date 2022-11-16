import React from 'react';
import { Comment } from '../../types/Comment';

type Props = {
  info: Comment
};

export const CommentInfo: React.FC<Props> = ({ info }) => {
  const { name, email, body } = info;

  return (
    <li>
      <div className="CommentInfo">
        <div className="CommentInfo__title">
          <strong className="CommentInfo__name">{name}</strong>

          {' by '}

          <a
            className="CommentInfo__email"
            href="mailto:{one.email}"
          >
            {email}
          </a>
        </div>

        <div className="CommentInfo__body">
          {body}
        </div>
      </div>
    </li>
  );
};
