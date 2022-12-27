import React from 'react';

import { CommentInfoType } from '../../types';

export const CommentInfo: React.FC<CommentInfoType> = props => {
  const {
    email,
    name,
    body,
  } = props.comment;

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
