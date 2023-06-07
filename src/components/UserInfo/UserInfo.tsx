import React from 'react';
import './UserInfo.scss';
import { User } from '../../types/User';

type UserInfoProps = {
  user: User,
};

export const UserInfo: React.FC<UserInfoProps> = ({ user }) => (
  <a
    className="UserInfo"
    href={`mailto:${user.email}`}
  >
    {user.name}
  </a>
);
