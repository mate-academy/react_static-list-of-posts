import React from 'react';
import './UserInfo.scss';
import { User } from '../../types/User';

type PropsUserInfo = {
  user: User;
};

export const UserInfo: React.FC<PropsUserInfo> = ({ user }) => {
  const { name, email } = user;

  return (
    <a className="UserInfo" href={`mailto:${email}`}>
      {name}
    </a>
  );
};
