import React from 'react';

import './CommentInfo.scss';

import { Comment } from '../../types/Comment';

type Props = Pick<Comment, 'name' | 'body' | 'email'>;

export const CommentInfo: React.FC<Props> = ({ name, body, email }) => {
  return (
    <div className="comment">
      <h3 data-cy="comment-name" className="comment__name">{name}</h3>
      <p data-cy="comment-body" className="comment__body">{body}</p>
      <h4 data-cy="comment-email" className="comment__email">{email}</h4>
    </div>
  );
};
