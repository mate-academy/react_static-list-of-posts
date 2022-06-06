import React from 'react';
import { User } from '../../typedefs';
import './UserInfo.scss';

export const UserInfo: React.FC<User> = (user) => (
  user && (
    <>
      <p data-cy="user-name">{user.name}</p>
      <p data-cy="user-email">{user.email}</p>
    </>
  ));
