import React from 'react';
import './UserInfo.scss';
import { User } from '../../types/users';

type Props = {
  user: User;
};

export const UserInfo: React.FC<Props> = ({ user }) => {
  const { name, email } = user;

  return (
    <p>
      {' Posted by '}

      <a className="UserInfo" href={`mailto:${email}`}>
        {name}
      </a>
    </p>
  );
};
