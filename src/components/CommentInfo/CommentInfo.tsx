import React from 'react';
import { Comment } from '../../react-app-env';

type Props = {
  comment: Comment,
};

export const CommentInfo: React.FC<Props> = ({ comment }) => (
  <div className="notification">
    <h5 data-cy="comment-name">{comment.name}</h5>
    <p data-cy="comment-body">{comment.body}</p>
    <a data-cy="comment-email" href="email">{comment.email}</a>
  </div>
);
