import React from 'react';

import { CommentTypes } from '../../types';

type Props = {
  comment: CommentTypes
};

export const CommentInfo: React.FC<Props> = ({ comment }) => {
  const {
    name, email, body,
  } = comment;

  return (
    <>
      <div className="CommentInfo__title">
        <strong className="CommentInfo__name">
          {name}
        </strong>

        &nbsp;by&nbsp;

        <a href={`mailto:${email}`} className="CommentInfo__email">
          {email}
        </a>
      </div>

      <div className="CommentInfo__body">
        {body}
      </div>
    </>
  );
};
