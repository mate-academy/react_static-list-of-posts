import React from 'react';
import './UserInfo.scss';
import { UsersFromServer } from '../../types/Users';

type Props = {
  user: UsersFromServer;
};

export const UserInfo: React.FC<Props> = ({ user }) => {
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
