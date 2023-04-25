import React from 'react';
import { User } from '../../types/User';
import './UserInfo.scss';

type TypeUserInfo = {
  user: User,
};

export const UserInfo: React.FC<TypeUserInfo> = ({ user }) => {
  const mail = `mailto:${user.email}`;

  return (
    <a className="UserInfo" href={mail}>
      {user.name}
    </a>
  );
};
