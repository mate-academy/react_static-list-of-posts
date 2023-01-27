import React from 'react';
import './CommentInfo.scss';

import { Comment } from '../../types/Comment';

type Props = {
  comment: Comment;
};

export const CommentInfo: React.FC<Props> = ({ comment }) => {
  const {
    name, email, body, id,
  } = comment;

  return (
    <li key={id}>
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

      <div className="CommenInfo__body">
        {body}
      </div>

    </li>
  );
};
