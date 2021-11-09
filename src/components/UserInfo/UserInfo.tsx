import React from 'react';
import { User } from '../../types/types';
import './UserInfo.scss';

interface Props {
  user: User,
}

export const UserInfo: React.FC<Props> = ({ user }) => (
  <div className="user__info">
    <h2 className="user__title">User Info:</h2>
    <p className="user__name">{user.name}</p>
    <p className="user__email">{user.email}</p>
  </div>
);
