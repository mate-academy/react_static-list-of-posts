import React from 'react';

import './CommentInfo.scss';

type Props = {
  name: string,
  email: string,
  body: string,
};

export const CommentInfo: React.FC<Props> = ({ name, body, email }) => (
  <>
    <strong data-cy="comment-name">{name}</strong>
    <p data-cy="comment-body">{body}</p>
    <i data-cy="comment-email">{email}</i>
  </>
);
