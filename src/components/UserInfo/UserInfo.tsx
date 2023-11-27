import React from 'react';
import { User } from '../../types/User';
import './UserInfo.scss';

type UserInfoProps = {
  user: User,
};

export const UserInfo: React.FC<UserInfoProps> = ({ user }) => {
  const { name, email } = user;

  return (
    <p>
      {' Posted by  '}
      <a className="UserInfo" href={`mailto:${email}`}>
        {name}
      </a>
    </p>
  );
};
