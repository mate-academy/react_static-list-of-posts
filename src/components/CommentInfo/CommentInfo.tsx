import React from 'react';

import { CommentInfoProps } from '../../types';

export const CommentInfo: React.FC<CommentInfoProps> = ({ comment }) => {
  const {
    name, email, body,
  } = comment;

  return (
    <div className="CommentInfo">
      <div className="CommentInfo__title">
        <strong className="CommentInfo__name">
          {name}
        </strong>

        {' by '}

        <a href={`mailto:${email}`} className="CommentInfo__email">
          {email}
        </a>
      </div>

      <div className="CommentInfo__body">
        {body}
      </div>
    </div>
  );
};
