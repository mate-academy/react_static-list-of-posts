import React from 'react';
import './CommentInfo.scss';

type Props = {
  name: string,
  email: string,
  body: string,
};

export const CommentInfo: React.FC<Props> = ({ name, email, body }) => (
  <div className="commentInfo">
    <h4 className="commentInfo__name" data-cy="comment-name">{name}</h4>
    <h4 className="commentInfo__email" data-cy="comment-email">{email}</h4>
    <h5 data-cy="comment-body">{body}</h5>
  </div>
);
