import React from 'react';
import { User } from '../../types/User';
import './UserInfo.scss';

type UserProp = {
  user: User;
};

export const UserInfo: React.FC<UserProp> = ({ user }) => {
  const { email, name } = user;

  return (
    <a className="UserInfo" href={`mailto:${email}`}>
      {name}
    </a>
  );
};
