import React from 'react';
import './UserInfo.scss';
import { User } from '../../types/User';

type Props = {
  user: User;
};

export const UserInfo: React.FC <Props> = ({ user }) => {
  const {
    name,
    email,
    phone,
    website,
  } = user;

  return (
    <div>
      <p>{name}</p>
      <p>{email}</p>
      <p>{phone}</p>
      <p>{website}</p>
    </div>
  );
};
