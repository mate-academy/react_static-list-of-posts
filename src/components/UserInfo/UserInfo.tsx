import React from 'react';
import { User } from '../../types/User';
import './UserInfo.scss';

type Prop = {
  user: User,
};

export const UserInfo: React.FC<Prop> = ({ user }) => {
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
