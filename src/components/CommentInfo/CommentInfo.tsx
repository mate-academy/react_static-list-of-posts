import React from 'react';
import './CommentInfo.scss';

type Props = {
  name: string,
  body: string,
  email: string,
};

export const CommentInfo: React.FC<Props> = ({ name, body, email }) => (
  <>
    <h3 data-cy="comment-name">{name}</h3>
    <p data-cy="comment-body">{body}</p>
    <a href={email} data-cy="comment-email">
      {email}
    </a>
  </>
);
