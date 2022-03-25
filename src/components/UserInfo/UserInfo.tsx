import React from 'react';
import './UserInfo.scss';

type Props = {
  user: User,
};

export const UserInfo: React.FC<Props> = ({ user }) => (
  <h3 className="userInfo">
    <div className="userInfo__name">{user.name}</div>
    <div className="userInfo__email">{user.email}</div>
  </h3>
);
