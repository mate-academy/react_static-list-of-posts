import React from 'react';
import { User } from '../../types/User';

interface PropsUser {
  user: User;
}

export const UserInfo: React.FC<PropsUser> = ({ user }) => {
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
