import React from 'react';
import { User } from '../../types/api.types';
import './UserInfo.scss';

type UserInfoProps = {
  user: User
};

export const UserInfo: React.FC<Props> = ({ user }) => {
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
