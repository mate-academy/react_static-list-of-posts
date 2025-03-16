import React from 'react';
import './UserInfo.scss';
import { User } from '../../types/User';

type UserDataProp = {
  userData: User | null;
};

export const UserInfo: React.FC<UserDataProp> = ({ userData }) => {
  if (!userData) {
    return <span className="UserInfo">Unknown User</span>;
  }

  return (
    <a className="UserInfo" href={`mailto:${userData.email}`}>
      {userData.name}
    </a>
  );
};
