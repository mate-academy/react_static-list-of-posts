import React from 'react';
import { User } from '../../types/user';
import './UserInfo.scss';

type TypeUser = {
  user: User;
};

export const UserInfo: React.FC<TypeUser> = ({ user }) => (
  <a className="UserInfo" href={`mailto:${user.email}`}>
    {user.name}
  </a>
);
