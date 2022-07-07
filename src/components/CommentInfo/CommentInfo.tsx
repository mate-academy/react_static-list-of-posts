import React from 'react';

import './CommentInfo.scss';

type Props = {
  name: string;
  body: string;
  email: string;
};

export const CommentInfo: React.FC<Props> = ({
  name,
  body,
  email,
}) => (
  <>
    <span className="commentInfo">
      {' - '}
      <span data-cy="comment-name">{name}</span>
      {'  -  '}
      <span data-cy="comment-body">{body}</span>
      {' - '}
      <span data-cy="comment-email">{email}</span>
    </span>

  </>
);
