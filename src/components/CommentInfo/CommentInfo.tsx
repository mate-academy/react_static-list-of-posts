import React from 'react';

import './CommentInfo.scss';
import { Comment } from '../../Types/Types';

type Props = {
  comment: Comment,
};

export const CommentInfo: React.FC<Props> = ({ comment }) => (
  <>
    <h4 data-cy="comment-name">{comment.name}</h4>
    <p data-cy="comment-body">{comment.body}</p>
    <span data-cy="comment-email">{comment.email}</span>
  </>
);
