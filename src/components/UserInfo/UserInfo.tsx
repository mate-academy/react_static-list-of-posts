import React from 'react';
import './UserInfo.scss';
import { User } from '../../appTypeDefs';

interface UserInfoProps {
  user: User | null;
}

export const UserInfo: React.FC<UserInfoProps> = ({ user }) => (
  <>
    <h4 data-cy="user-name">{`AUTHOR: ${user?.name} |`}</h4>
    <h4 data-cy="user-email">{` EMAIL: ${user?.email}`}</h4>
  </>
);
