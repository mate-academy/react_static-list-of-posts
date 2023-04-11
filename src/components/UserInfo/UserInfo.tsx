import React from 'react';
import { User } from '../../types/User';

type UserInfoProps = {
  user: User | null;
};

export const UserInfo: React.FC<UserInfoProps> = ({ user }) => {
  return (
    <p>
      {' Posted by  '}
      <a className="UserInfo" href={`mailto:${user?.email}`}>
        {user?.name}
      </a>
    </p>
  );
};
