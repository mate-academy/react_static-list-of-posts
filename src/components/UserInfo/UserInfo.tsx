import React from 'react';
import { User } from '../../types/User';
import './UserInfo.scss';

type Users = {
  user: User;
};

export const UserInfo: React.FC<Users> = ({ user }) => (
  <p>
    {' Posted by  '}

    <a className="UserInfo" href={`mailto:${user.email}`}>
      {user.name}
    </a>
  </p>
);
