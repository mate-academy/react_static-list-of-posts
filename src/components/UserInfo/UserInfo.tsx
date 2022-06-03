import React from 'react';
import './UserInfo.scss';
import { User } from '../../appTypeDefs';

interface UserInfoProps {
  user: User | null | undefined;
}

export const UserInfo: React.FC<UserInfoProps> = ({ user }) => (
  <>
    <h4>{`Author: ${user?.name} Email: ${user?.email}`}</h4>
  </>
);
