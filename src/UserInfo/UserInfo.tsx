import React from 'react';
import { User } from '../types';
import './UserInfo.scss';

type Props = {
  user: User;
};

const UserInfo:React.FC<Props> = ({ user }) => {
  return (
    <>
      <div className="userInfo">
        <div>{user?.name}</div>
        <div>{user?.email}</div>
      </div>

    </>
  );
};

export default UserInfo;
