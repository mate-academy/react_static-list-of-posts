import React from 'react';

import './CommentInfo.scss';

type Props = {
  name: string,
  email: string,
  body: string,
};

export const CommentInfo: React.FC<Props> = ({ name, email, body }) => (
  <>
    <h3 data-cy="comment-name">{name}</h3>
    <p data-cy="comment-email">{email}</p>
    <p data-cy="comment-body">{body}</p>
  </>

);
