import React from 'react';
import { Users } from '../../types/Users';
import './UserInfo.scss';

type Props = {
  user: Users
};

export const UserInfo: React.FC<Props> = ({ user }) => {
  const {
    name,
    email,
  } = user;

  return (
    <p>
      {' Posted by  '}

      <a className="UserInfo" href={`mailto:${email}`}>
        {name}
      </a>
    </p>
  );
};
