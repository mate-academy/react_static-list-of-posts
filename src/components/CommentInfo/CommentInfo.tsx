import React from 'react';
import { Comments } from '../../types/Comments';

type Props = {
  comments: Comments;
};

export const CommentInfo: React.FC<Props> = ({ comments }) => {
  const {
    name,
    email,
    body,
  } = comments;

  return (
    <>
      <div className="CommentInfo">
        <div className="CommentInfo__title">
          <strong className="CommentInfo__name">{name}</strong>
          <span>{' by '}</span>
          <a
            className="CommentInfo__email"
            href={`mailto:${email}`}
          >
            Telly_Lynch@karl.co.uk
          </a>
        </div>

        <div className="CommentInfo__body">
          {body}
        </div>
      </div>
    </>
  );
};
