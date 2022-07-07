import React from 'react';

import './CommentInfo.scss';
import { Comment } from '../../types/Comment';

type Props = {
  comment: Comment
};

export const CommentInfo: React.FC<Props> = ({ comment }) => (
  <>
    <strong data-cy="comment-name">{comment.name}</strong>
    <p data-cy="comment-body">{comment.body}</p>
    <i data-cy="comment-email">{comment.email}</i>
  </>
);
