import React from 'react';
import { UsersFromServer } from '../../types/Users';

type Props = {
  user: UsersFromServer;
};

export const UserInfo: React.FC<Props> = ({ user }) => {
  return (
    <a className="UserInfo" href={`mailto:${user.email}`}>
      {user.name}
    </a>
  );
};
