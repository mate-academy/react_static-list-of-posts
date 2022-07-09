import React from 'react';
import { Comment } from '../../types/Comment';

import './CommentInfo.scss';

type Props = {
  comment: Comment;
};

export const CommentInfo: React.FC<Props> = ({ comment }) => (
  <>
    <p data-cy="comment-name"><strong>{comment.name}</strong></p>
    <p data-cy="comment-body">{comment.body}</p>
    <p data-cy="comment-email">{comment.email}</p>
  </>
);
