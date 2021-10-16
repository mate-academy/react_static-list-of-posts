import React from 'react';
import { User } from '../../types/User';
import './UserInfo.scss';

type Props = {
  user: User;
};

export const UserInfo: React.FC<Props> = ({ user }) => (
  <div className="user">
    <div className="user__name">
      Name:
      {' '}
      {user.name}
    </div>
    <div className="user__email">
      Email:
      {' '}
      {user.email}
    </div>
    <hr />
  </div>
);
