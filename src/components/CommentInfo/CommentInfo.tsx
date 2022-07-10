import React from 'react';
import { Comment } from '../../type';
import './CommentInfo.scss';

export const CommentInfo: React.FC<{ comment: Comment }> = ({ comment }) => (
  <>
    <p className="comment" data-cy="comment-name">{comment.name}</p>
    <p className="comment" data-cy="comment-body">{comment.body}</p>
    <p className="comment" data-cy="comment-email">{comment.email}</p>
  </>
);
