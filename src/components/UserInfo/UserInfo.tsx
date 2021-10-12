import React from 'react';
import { User } from '../../types/User';
import './UserInfo.scss';

type Props = {
  user: User,
};

export const UserInfo: React.FC<Props> = ({ user }) => (
  <div className="userInfo">
    <p className="userInfo__author">
      <strong>
        Author:
        {' '}
        {user.name}
      </strong>
      <p>{user.email}</p>
    </p>
  </div>
);
