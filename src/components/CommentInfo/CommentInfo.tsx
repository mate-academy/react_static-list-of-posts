import React from 'react';
import { Comment } from '../../types';
import './CommentInfo.scss';

type Props = {
  comment: Comment;
};

export const CommentInfo: React.FC<Props> = ({ comment }) => (
  <div className="comment-info">
    <h3 data-cy="comment-name" className="comment-name">{comment.name}</h3>
    <p data-cy="comment-body" className="comment-body">{comment.body}</p>
    <p data-cy="comment-email" className="comment-email">{comment.email}</p>
  </div>
);
