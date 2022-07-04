import React from 'react';

import './CommentInfo.scss';
import { Comment } from '../../types/Comment';

type Props = {
  comment: Comment;
};

export const CommentInfo: React.FC<Props> = ({ comment }) => (
  <>
    <p data-cy="comment-name">{comment.name}</p>
    <p data-cy="comment-body">{comment.body}</p>
    <p data-cy="comment-email">{comment.email}</p>
  </>
);
