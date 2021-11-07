import React from 'react';
import './UserInfo.scss';
import { UserType } from '../../types/UserType';

type Props = {
  user: UserType;
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
