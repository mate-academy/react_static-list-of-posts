import React from 'react';
import './UserInfo.scss';
import { User } from '../../../types/User';

interface UserinfoProps {
  user: User;
}

export const UserInfo: React.FC<UserinfoProps> = ({ user }) => (
  <p>
    {' Posted by  '}
    <a className="UserInfo" href={`mailto:${user.email}`}>
      {user.name}
    </a>
  </p>
);
