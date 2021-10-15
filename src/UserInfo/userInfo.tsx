import React from 'react';
import { User } from '../types/Post';
import './userInfo.scss';

type Props = {
  user: User;
};
export const UserInfo: React.FC<Props> = ({ user }) => {
  return (
    <div>
      <div className="userItem">
        <strong>User name: </strong>
        {user.name}
      </div>
      <div className="userItem">
        <strong>Email: </strong>
        {user.email}
      </div>
    </div>
  );
};
