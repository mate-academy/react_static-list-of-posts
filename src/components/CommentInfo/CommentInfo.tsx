import React from 'react';
import { Comment } from '../../react-app-env';
import './CommentInfo.scss';

interface Props {
  comment: Comment;
}

export const CommentInfo: React.FC<Props> = ({ comment }) => (
  <>
    <li data-cy="comment-name">{comment.name}</li>
    <li data-cy="comment-body">{comment.body}</li>
    <li data-cy="comment-email">{comment.email}</li>
  </>
);
