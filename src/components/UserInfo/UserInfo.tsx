import React from 'react';
import { User } from '../../Types/User';

export const UserInfo: React.FC<User> = ({
  name,
  email,
}) => (
  <>
    <h3>{name}</h3>
    <p>{email}</p>
  </>
);
