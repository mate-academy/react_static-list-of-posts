import React from 'react';

import './CommentInfo.scss';

type Props = {
  name: string,
  body: string,
  email: string,
};

export const CommentInfo: React.FC<Props> = ({ name, body, email }) => (
  <>
    <strong data-cy="comment-name" className="comment__name">{name}</strong>
    <br />
    <em data-cy="comment-body" className="comment__body">{body}</em>
    <br />
    <span data-cy="comment-email" className="comment__email">{email}</span>
  </>
);
