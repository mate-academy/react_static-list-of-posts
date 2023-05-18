import React from 'react';
import { User } from '../../types/User';
import './UserInfo.scss';

export const UserInfo: React.FC <{ user: User }> = ({ user }) => (
  <p>
    {' Posted by  '}
    <a className="UserInfo" href={`mailto:${user.email}`}>
      {user.name}
    </a>
  </p>
);
