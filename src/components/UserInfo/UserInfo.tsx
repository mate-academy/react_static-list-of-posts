import React from 'react';
import { User } from '../../interface/User';

import './UserInfo.scss';

type Props = {
  user: User;
};

export const UserInfo: React.FC<Props> = ({ user }) => (
  <div className="userInfo">
    <span className="user-name">{`author: ${user.name}`}</span>
    <br />
    <span className="user-email">{`author e-mail: ${user.email}`}</span>
  </div>
);
