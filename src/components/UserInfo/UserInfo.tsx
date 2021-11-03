import React from 'react';
import { User } from '../../types/User';

import './UserInfo.scss';

export const UserInfo:React.FC<User> = ({ ...user }) => (
  <h4 className="userInfo">
    {`${user.name}, ${user.email}`}
  </h4>
);
