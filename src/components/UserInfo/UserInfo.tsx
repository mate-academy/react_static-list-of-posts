import React from 'react';
import { User } from '../../types/interfaces';

type Props = {
  user: User;
};

export const UserInfo: React.FC<Props> = ({ user }) => {
  const { name, email } = user;

  return (
    <>
      <span data-cy="name">{name}</span>
      <span data-cy="email">{email}</span>
    </>
  );
};
