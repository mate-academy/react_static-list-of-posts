import React from 'react';
import './CommentInfo.scss';

type Props = {
  name: string,
  body: string,
  email: string,
};

export const CommentInfo: React.FC<Props> = ({ name, body, email }) => (
  <div className="comment-info">
    <div className="comment-info__name" data-cy="comment-name">
      {name}
    </div>
    <div className="comment-info__body" data-cy="comment-body">
      {body}
    </div>
    <div className="comment-info__email" data-cy="comment-email">
      <strong>Email:</strong>
      {' '}
      {email}
    </div>
  </div>
);
