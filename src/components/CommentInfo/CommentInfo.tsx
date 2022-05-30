import React from 'react';
import './CommentInfo.scss';
import { Comment } from '../../react-app-env';

export interface Props {
  comment: Comment;
}

export const CommentInfo: React.FC<Props> = ({ comment }) => (
  <>
    <p data-cy="comment-name" className="title is-6">{`Name: ${comment.name}`}</p>
    <p data-cy="comment-body" className="notification">{comment.body}</p>
    <p data-cy="comment-email">{comment.email}</p>
  </>
);
