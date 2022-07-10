import React from 'react';
import './CommentInfo.scss';
import { Comment } from '../../types';

type CommentInfoProps = {
  comment: Comment
};

export const CommentInfo: React.FC<CommentInfoProps> = (props) => {
  return (
    <div>
      <div data-cy="comment-name">{props.comment.name}</div>
      <div data-cy="comment-body">{props.comment.body}</div>
      <div data-cy="comment-email">{props.comment.email}</div>
    </div>
  );
};
