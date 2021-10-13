import React from 'react';
import { UserInfoProps } from './Types/UserTypes';

export const UserInfo: React.FC<UserInfoProps> = ({ user }) => (
  <>
    <td>{user.name}</td>
    <td>{user.email}</td>
  </>
);
