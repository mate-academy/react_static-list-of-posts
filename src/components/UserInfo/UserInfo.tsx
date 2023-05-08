import React from 'react';
import { User } from '../../types/User';
import './UserInfo.scss';

interface UserInfoProps {
  user: User,
}

export const UserInfo: React.FC<UserInfoProps> = ({ user }) => {
  const mail = `mailto:${user.email}`;

  return (
    <a className="UserInfo" href={mail}>
      {user.name}
    </a>
  );
};
