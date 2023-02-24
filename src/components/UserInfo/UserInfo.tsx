import React from 'react';
import { User } from '../../types/User';
import './UserInfo.scss';

type Props = {
  user: User | undefined;
};

export const UserInfo: React.FC<Props> = ({ user }) => (
  user ? (
    <a className="UserInfo" href={user.email}>
      {user.name}
    </a>
  ) : null
);
