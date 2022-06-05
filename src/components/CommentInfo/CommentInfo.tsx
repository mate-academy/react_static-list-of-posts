import React from 'react';
import { Comment } from '../../react-app-env';

import './CommentInfo.scss';

type Props = {
  comment: Comment,
};

export const CommentInfo: React.FC<Props> = ({ comment }) => (
  <>
    <h3 data-cy="comment-name">{comment.name}</h3>
    <p data-cy="comment-email">{comment.email}</p>
    <p data-cy="comment-body">{comment.body}</p>
  </>
);
