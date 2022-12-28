import React from 'react';
import './UserInfo.scss';
import { User } from '../../types/User';

type UsersInfo = {
  user: User;
};

export const UserInfo: React.FC<UsersInfo> = ({ user }) => (
  <a
    className="UserInfo"
    href={`mailto:${user.email}`}
  >
    {`${user.name}`}
  </a>
);
