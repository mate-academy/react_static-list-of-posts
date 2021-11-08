import React from 'react';
import { Comment } from '../../type/type';
import './CommentInfo.scss';

interface Props {
  commentInfo: Comment;
}

export const CommentInfo: React.FC<Props> = ({ commentInfo }) => {
  const { name, body, email } = commentInfo;

  return (
    <div className="comment-info">
      <span>{name}</span>
      <br />
      <span>{body}</span>
      <br />
      <span>{email}</span>
    </div>
  );
};
