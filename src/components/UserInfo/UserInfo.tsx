import React from 'react';
import { User } from '../types/User';

export const UserInfo: React.FC<User> = ({ name, email }) => (
  <h3>
    {name}
    {email}
  </h3>
);
