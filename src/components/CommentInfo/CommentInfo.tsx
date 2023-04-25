import React from 'react';
import { Comments } from '../../types/Comments';

type TypeCommentInfo = {
  comment: Comments,
};

export const CommentInfo: React.FC<TypeCommentInfo> = ({ comment }) => {
  const { name, email, body } = comment;
  const mail = `mailto${email}`;

  return (
    <div className="CommentInfo">
      <div className="CommentInfo__title">
        <strong className="CommentInfo__name">
          {name}
        </strong>

        {' by '}

        <a
          className="CommentInfo__email"
          href={mail}
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
