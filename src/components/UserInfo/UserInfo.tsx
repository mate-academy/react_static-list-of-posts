import React from 'react';
import './UserInfo.scss';
import { User } from '../../types/User';

type UsersInfo = {
  user: User;
};

export const UserInfo: React.FC<UsersInfo> = ({ user }) => {
  const {
    name,
    email,
  } = user;

  return (
    <a
      className="UserInfo"
      href={`mailto:${email}`}
    >
      {`${name}`}
    </a>
  );
};
