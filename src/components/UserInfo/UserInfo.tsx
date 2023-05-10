import React from 'react';

import { User } from '../../types/User';
import './UserInfo.scss';

interface UserProps {
  user: User;
}

export const UserInfo: React.FC<UserProps> = ({ user }) => {
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
