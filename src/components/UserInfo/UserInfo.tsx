import React from 'react';
import './UserInfo.scss';
import { UserType } from '../../types/UserType';

type Props = {
  user: UserType;
};

export const UserInfo: React.FC <Props> = ({ user }) => (
  <div>
    <p>{user.name}</p>
    <p>{user.email}</p>
    <p>{user.phone}</p>
  </div>
);
