import React from 'react';
import { User } from '../../types/Users';

type Users = {
  user: User;
};

export const UserInfo: React.FC<Users> = ({ user }) => {
  const { email, name } = user;

  return (
    <a className="UserInfo" href={`mailto:${email}`}>
      {name}
    </a>
  );
};
