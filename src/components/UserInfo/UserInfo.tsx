import React from 'react';
import './UserInfo.scss';
import { User } from '../../types';

type Props = {
  user: User
};

export const UserInfo: React.FC<Props> = ({ user }) => {
  const {
    name,
    email,
  } = user;

  return (
    <div>
      <h3 data-cy="user-name">{name}</h3>
      <h4 data-cy="user-email">{email}</h4>
    </div>
  );
};
