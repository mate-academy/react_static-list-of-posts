import React from 'react';
import './CommentInfo.scss';

type Props = {
  name: string,
  body: string,
  email: string,
};

export const CommentInfo: React.FC<Props> = ({
  name,
  body,
  email,
}) => (
  <div className="comment">
    <div className="comment__name" data-cy="comment-name">{name}</div>
    <div className="comment__body" data-cy="comment-body">{body}</div>
    <div className="comment__email" data-cy="comment-email">{email}</div>
  </div>
);
