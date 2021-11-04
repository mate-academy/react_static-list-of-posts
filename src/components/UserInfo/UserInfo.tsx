import React from 'react';
import { User } from '../../types/User';

import './UserInfo.scss';

export const UserInfo:React.FC<User> = ({ name, email }) => (
  <h4 className="userInfo">
    {`${name}, ${email}`}
  </h4>
);
