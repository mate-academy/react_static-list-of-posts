import React from 'react';
import './UserInfo.scss';
import { User } from '../../appTypeDefs';

interface UserInfoProps {
  user: User | null | undefined;
}

export const UserInfo: React.FC<UserInfoProps> = ({ user }) => (
  <>
    <h4>{`AUTHOR: ${user?.name} | EMAIL: ${user?.email}`}</h4>
  </>
);
