import React from 'react';
import { User } from '../../types/User';
import './UserInfo.scss';

export const UserInfo: React.FC<{ userInfoUser: User }> = ({
  userInfoUser,
}) => {
  return (
    <a className="UserInfo" href="mailto:Sincere@april.biz">
      {userInfoUser?.name}
    </a>
  );
};
