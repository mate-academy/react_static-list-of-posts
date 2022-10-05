import React from 'react';
import { Comment } from '../../Interfaces/Comment';

type CommentProps = {
  comment: Comment;
};

export const CommentInfo: React.FC<CommentProps> = ({ comment }) => {
  const {
    name, email, body,
  } = comment;

  return (
    <li className="CommentInfo">
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
    </li>
  );
};
