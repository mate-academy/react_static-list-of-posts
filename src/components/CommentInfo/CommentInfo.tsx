import React from 'react';

import './CommentInfo.scss';

type Props = {
  name: string;
  email: string;
  body: string;
};

export const CommentInfo: React.FC<Props> = ({ name, email, body }) => (
  <>
    <p data-cy="comment-name">
      {name}
    </p>

    <p data-cy="comment-email">
      {email}
    </p>

    <p data-cy="comment-body">
      {body}
    </p>
  </>
);
