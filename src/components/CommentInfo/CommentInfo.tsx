import React from 'react';
import { Comment } from '../../types/Comment';
import './CommentInfo.scss';

type Props = {
  comment: Comment;
};

export const CommentInfo: React.FC<Props> = props => {
  const { comment } = props;
  const { name, email, body } = comment;

  return (
    <div className="comment">
      <div className="comment__name">{name}</div>
      <div className="comment__email">{email}</div>
      <div className="comment__body">{body}</div>
    </div>
  );
};
