import React from 'react';
import './CommentInfo.scss';
import { Comment } from '../../types';

type Props = {
  comment: Comment;
};

export const CommentInfo: React.FC<Props> = ({ comment }) => {
  const {
    name,
    email,
    body,
  } = comment;

  return (
    <div className="commentInfo">
      <h3 data-cy="comment-name">{name}</h3>
      <h4 data-cy="comment-email">{email}</h4>
      <p data-cy="comment-body">{body}</p>
    </div>
  );
};
