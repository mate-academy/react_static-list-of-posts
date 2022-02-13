import React from 'react';
import { User } from '../../types/user';
import './UserInfo.scss';

type Props = {
  user: User;
};

export const UserInfo: React.FC<Props> = ({ user }) => (
  <div className="userInfo">
    <h3 className="userInfo__name">{user.username}</h3>
    <span className="userInfo__email">{user.email}</span>
  </div>
);
