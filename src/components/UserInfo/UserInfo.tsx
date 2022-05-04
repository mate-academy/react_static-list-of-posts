import React from 'react';
import { User } from '../../Types/types';

export const UserInfo: React.FC<User> = ({
  name,
  email,
}) => (
  <>
    <span data-cy="name">{name}</span>
    <span data-cy="email">{email}</span>
  </>
);
