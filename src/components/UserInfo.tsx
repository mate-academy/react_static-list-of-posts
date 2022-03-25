import React from 'react';
import { User } from '../types/User';
import './UserInfo.scss';

type Props = {
  users: User;
};

export const UserInfo: React.FC<Props> = ({ users }) => (
  <>
    <div className="name">{users.name}</div>
    <div className="email">{users.email}</div>
  </>
);
