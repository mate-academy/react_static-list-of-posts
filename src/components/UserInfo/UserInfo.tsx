import React from 'react';
import { User } from '../type/user';
import './UserInfo.scss';

type Props = {
  user: User
};

export const UserInfo: React.FC<Props> = ({ user }) => (
  <div className="user">
    <p data-cy="name">{user.name}</p>
    <p data-cy="email">{user.email}</p>
  </div>
);
