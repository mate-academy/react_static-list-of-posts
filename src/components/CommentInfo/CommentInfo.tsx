import React from 'react';
import { Comment } from '../../react-app-env';

import './CommentInfo.scss';

type Props = {
  comment: Comment;
};

export const CommentInfo: React.FC<Props> = ({ comment }) => (
  <>
    <h3 data-cy="comment-name">{comment.name}</h3>
    <div data-cy="comment-body">{comment.body}</div>
    <div data-cy="comment-email">{comment.email}</div>
  </>
);
