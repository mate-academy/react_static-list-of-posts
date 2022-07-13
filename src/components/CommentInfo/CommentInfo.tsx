import React from 'react';

import './CommentInfo.scss';
import { Comment } from '../../types/Comment';

type Props = {
  comment: Comment
};

export const CommentInfo: React.FC<Props> = ({ comment }) => {
  const {
    name,
    body,
    email,
  } = comment;

  return (
    <>
      <strong data-cy="comment-name">{name}</strong>
      <p data-cy="comment-body">{body}</p>
      <i data-cy="comment-email">{email}</i>
    </>
  );
};
