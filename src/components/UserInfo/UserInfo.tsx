import React from 'react';

import './UserInfo.scss';

import { User } from '../../Types/user';

type Props = {
  user: User | null
};

export const UserInfo: React.FC<Props> = ({ user }) => {
  if (!user) {
    return null;
  }

  return (
    <p>
      {' Posted by '}
      <a className="UserInfo" href={`mailto:${user.email}`}>
        {user.name}
      </a>
    </p>
  );
};
