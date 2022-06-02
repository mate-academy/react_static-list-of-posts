import React from 'react';
import { Comment } from '../../react-app-env.d';
import './CommentInfo.scss';

type Props = {
  comment: Comment,
};

export const CommentInfo: React.FC<Props> = ({ comment }) => (
  <div className="box">
    <p data-cy="comment-name">{`name: ${comment.name}`}</p>
    <p data-cy="comment-body">{comment.body}</p>
    <p data-cy="comment-email">{`email: ${comment.email}`}</p>
  </div>
);
