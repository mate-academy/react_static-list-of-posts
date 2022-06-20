import React from 'react';

import './CommentInfo.scss';
import { Comment } from '../../react-app-env';

type Props = {
  comment: Comment;
};

export const CommentInfo: React.FC<Props> = ({ comment }) => (
  <div className="comment">
    <div className="comment-name" data-cy="comment-name">{comment.name}</div>
    <div data-cy="comment-body">{comment.body}</div>
    <div className="email" data-cy="comment-email">{comment.email}</div>
  </div>
);
