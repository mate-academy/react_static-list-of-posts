import React from 'react';
import './UserInfo.scss';
import { User } from '../../types/User';

type Props = {
  user: User;
};

export const UserInfo: React.FC<Props> = ({ user }) => (
  <>
    <p className="name">{user.name}</p>
    <p className="email">{user.email}</p>
  </>
);
