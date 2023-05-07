import React from 'react';
import './UserInfo.scss';
import { User } from '../../types/User';

interface UserInfoProps {
  userInfo: User
}

export const UserInfo: React.FC<UserInfoProps> = ({
  userInfo: { name, email },
}) => (
  <a className="UserInfo" href={email}>
    {name}
  </a>
);
