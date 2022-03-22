import React from 'react';
import { Comment } from '../../types/Comment';
import { UserInfo } from '../UserInfo';

type Props = {
  comment: Comment;
};

export const CommentInfo: React.FC<Props> = ({ comment }) => {
  const { name, email, body } = comment;

  return (
    <div className="comment">
      <UserInfo name={name} email={email} />
      <div className="comment__body">{body}</div>
    </div>
  );
};
