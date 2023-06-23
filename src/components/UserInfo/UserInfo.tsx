import React from 'react';

import './UserInfo.scss';

import { User } from '../../types/user';

type Props = {
  user: User | undefined,
};

export const UserInfo: React.FC<Props> = ({ user }) => {
  const userEmail: string = user ? user.email : '';
  const userName: string = user ? user.name : 'Without autor';

  return (
    <a
      className="UserInfo"
      href={`mailto:${userEmail}`}
    >
      {userName}
    </a>
  );
};
