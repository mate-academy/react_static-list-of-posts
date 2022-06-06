import React from 'react';
import { Comment } from '../../react-app-env';

import './CommentInfo.scss';

interface Prop {
  comment: Comment
}

export const CommentInfo: React.FC<Prop> = ({ comment }) => (
  <>
    <h2 data-cy="comment-name">{comment.name}</h2>
    <p data-cy="comment-body">{comment.body}</p>
    <p data-cy="comment-email">{comment.email}</p>
  </>
);
