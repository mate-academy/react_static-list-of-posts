import React from 'react';
import { Comment } from '../../react-app-env';

import './CommentInfo.scss';

type Props = {
  comment: Comment;
};

export const CommentInfo: React.FC<Props> = ({ comment }) => (
  <>
    <h2 data-cy="comment-name">{comment.name}</h2>
    <p data-cy="comment-body">{comment.body}</p>
    <a href={comment.email} data-cy="comment-email">{comment.email}</a>
  </>
);
