import React from 'react';
import { UsersFromServer } from '../../types/User';

type Props = {
  user: UsersFromServer;
};

export const UserInfo: React.FC<Props> = ({ user }) => (
  <>
    <a className="UserInfo" href={`mailto:${user.email}`}>
      {user.name}
    </a>
  </>
);
