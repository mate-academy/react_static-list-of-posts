import React from 'react';

import './CommentInfo.scss';

type Props = {
  postId: number;
  name: string;
  body: string;
  email: string;
};

export const CommentInfo: React.FC<Props> = ({
  postId,
  name,
  body,
  email,
}) => (
  <>
    <div className="commentInfo">
      {' - '}
      <span data-cy="comment-name">{name}</span>
      {'  -  '}
      <span data-cy="comment-body">{body}</span>
      {' - '}
      <span data-cy="comment-email">{email}</span>
      {' - '}
      <span data-cy="comment-email">{postId}</span>
    </div>

  </>
);
