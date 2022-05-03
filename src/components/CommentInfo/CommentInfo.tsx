import React from 'react';
import { Comment } from '../../types/Comment';
import './CommentInfo.scss';

type Props = Pick<Comment, 'name' | 'body' | 'email'>;

export const CommentInfo: React.FC<Props> = ({ name, body, email }) => {
  return (
    <div className="comment">
      <h4 data-cy="comment-name" className="comment__name">{name}</h4>
      <p data-cy="comment-body" className="comment__body">{body}</p>
      <p data-cy="comment-email" className="comment__email">{email}</p>
    </div>
  );
};
