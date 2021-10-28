import React from 'react';
import { User } from '../../types/User';
import { Comment } from '../../types/Comment';
import { CommentList } from '../CommentList/CommentList';

type Props = {
  user: User
  comments: Comment[]
};

export const UserInfo: React.FC<Props> = ({
  user,
  comments = [],
}) => {
  return (
    <div className="user-info">
      <h4>{user.name}</h4>
      <span>{user.email}</span>
      <CommentList comments={comments} />
    </div>
  );
};
