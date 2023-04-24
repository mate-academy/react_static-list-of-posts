import React from 'react';
import { Comment } from '../../types/CommentInfo';

type Props = {
  comment: Comment
};

export const CommentInfo: React.FC<Props> = ({ comment }) => {
  const {
    name,
    email,
    body,
    id,
  } = comment;

  return (
    <div className="CommentInfo">
      <div className="CommentInfo__title">
        <strong className="CommentInfo__name" id={`${id}`}>{name}</strong>
        <span>by</span>
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
