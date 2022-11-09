import React from 'react';
import { User } from '../../types/User';

type Users = {
  user: User;
};

export const UserInfo: React.FC<Users> = ({ user }) => {
  const {
    name,
    email,
  } = user;

  return (
    <a className="UserInfo" href={`mailto:${email}`}>
      {name}
    </a>
  );
};
