import React from 'react';
import { User } from '../../types/User';

type UserInfoProps = {
  user: User;
};

export const UserInfo: React.FC<UserInfoProps> = ({ user }) => (
  <>
    <p>{user.name}</p>
    <p>{user.email}</p>
  </>
);
