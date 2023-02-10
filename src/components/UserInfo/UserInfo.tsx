import React from 'react';

import { User } from '../../types/Users';

interface Allusers {
  user: User;
}

export const UserInfo: React.FC<Allusers> = ({ user }) => {
  const {
    id,
    email,
    name,
  } = user;

  return (
    <a className="UserInfo" key={id} href={`mailto:${email}`}>
      {name}
    </a>
  );
};
