import React from 'react';
import './CommentInfo.scss';

type Props = {
  name: string;
  email: string;
  body: string;
};

export const CommentInfo: React.FC<Props> = ({ name, email, body }) => (
  <div className="comments__item">
    <span data-cy="comment-name" className="comments__item-name">
      {'Name: '}
      {name}
    </span>
    <br />
    <span data-cy="comment-email" className="comments__item-email">
      {'Email: '}
      {email}
    </span>
    <br />
    <span data-cy="comment-body" className="comments__item-body">
      {'Comment: '}
      {body}
    </span>
  </div>
);
