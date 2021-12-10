import React from 'react';
import { User } from '../types/User';
import './UserInfo.scss';

type Props = {
  user: User;
};

export const UserInfo: React.FC<Props> = ({ user }) => (
  <div className="User">
    <h4 className="User__name">{user.name}</h4>
    <span className="User__email">{user.email}</span>
  </div>
);
