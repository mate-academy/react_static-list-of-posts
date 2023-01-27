import React from 'react';
import { UserType } from '../../types/User';

import './UserInfo.scss';

interface UserInfoPropsType {
  user: UserType;
}

export const UserInfo: React.FC<UserInfoPropsType> = ({ user }) => {
  const {
    email,
    name,
  } = user;

  return (
    <a className="UserInfo" href={`mailto:${email}`}>
      {name}
    </a>
  );
};
