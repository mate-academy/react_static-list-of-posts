import React from 'react';
import { Comment } from '../../types/Comment';

type CommentInfoProps = {
  comment: Comment,
};

export const CommentInfo: React.FC<CommentInfoProps> = ({ comment }) => {
  const { name, email, body } = comment;

  return (
    <>
      <div className="CommentInfo">
        <div className="CommentInfo__title">
          <strong className="CommentInfo__name">{name}</strong>

          {` by ${email} `}

          <a
            className="CommentInfo__email"
            href={email}
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
