import React from 'react';

import './CommentInfo.scss';

type Props = {
  name:string,
  email: string,
  body: string,
};

export const CommentInfo: React.FC<Props> = ({ name, email, body }) => (
  <div
    className="commentInfo"
  >
    <div
      data-cy="comment-name"
    >
      {name}
    </div>

    <div
      data-cy="comment-body"
    >
      {body}
    </div>

    <div
      data-cy="comment-email"
    >
      {email}
    </div>
  </div>
);
