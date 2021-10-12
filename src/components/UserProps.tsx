import React from 'react';
import { User } from '../types/User';

type UserProps = {
  user: User;
};

export const UserInfo: React.FC<UserProps> = ({ user }) => (
  <>
    <p>{user.name}</p>
    <p>{user.email}</p>
  </>
);
