import React from 'react';
import './UserInfo.scss';
import { User } from '../../../types/User';

interface UserinfoProps {
  user: User;
}

export const UserInfo: React.FC<UserinfoProps> = ({ user }) => {
  const { email, name } = user;

  return (
    <p>
      {' Posted by  '}
      <a className="UserInfo" href={`mailto:${email}`}>
        {name}
      </a>
    </p>
  );
};
