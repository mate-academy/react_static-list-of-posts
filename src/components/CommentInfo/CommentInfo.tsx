import React from 'react';
import { Comment } from '../../react-app-env';

import './CommentInfo.scss';

interface Prop {
  comment: Comment
}

export const CommentInfo: React.FC<Prop> = ({ comment }: Prop) => (
  <>
    <h4 data-cy="comment-name">{comment.name}</h4>
    <p data-cy="comment-body">{comment.body}</p>
    <p data-cy="comment-email">{comment.email}</p>
  </>
);
