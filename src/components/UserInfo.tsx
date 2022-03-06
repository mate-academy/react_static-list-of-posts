import React from 'react';
import { UserType } from '../types';

import './UserInfo.scss';

type Props = {
  user: UserType
};

const UserInfo: React.FC<Props> = ({ user }) => (
  <div className="post__user-info user-info">
    <b>{user.name}</b>
    {' - '}
    <span>{user.email}</span>
  </div>
);

export default UserInfo;
