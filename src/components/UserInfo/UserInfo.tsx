import React from 'react';
import { User } from '../../types/User';
import './UserInfo.scss';

interface Props {
  user: User | null;
}

export const UserInfo: React.FC<Props> = ({ user }) => {
  return user
    ? (
      <a className="UserInfo" href={`mailto:${user.email}`}>
        {user.name}
      </a>
    )
    : <b>Unknown user</b>;
};
