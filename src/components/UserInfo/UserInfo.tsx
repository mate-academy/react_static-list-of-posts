import React from 'react';
import { Users } from '../../types/Users';

type UsersType = {
  user: Users;
};

export const UserInfo: React.FC<UsersType> = ({ user }) => {
  const { name, email } = user;

  return (
    <a className="UserInfo" href={`mailto:${email}`}>
      {name}
    </a>
  );
};
