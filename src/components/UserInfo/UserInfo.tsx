import React from 'react';
import './UserInfo.scss';

type UserProps = {
  user: User | undefined,
};

export const UserInfo: React.FC<UserProps> = ({ user }) => (
  <div className="user__info">
    <p className="user__name">{user?.username}</p>
    <p>{user?.email}</p>
  </div>
);
