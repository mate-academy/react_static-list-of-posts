import React from 'react';
import './UserInfo.scss';
import { User } from '../../types/User';

type Person = {
  user: User;
};

export const UserInfo: React.FC<Person> = ({ user }) => {
  const { name, email } = user;

  return (
    <a className="UserInfo" href={`mailto:${email}`}>
      {name}
    </a>
  );
};
