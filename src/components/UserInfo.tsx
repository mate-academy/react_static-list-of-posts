import React from 'react';
import { User } from '../types';
import './UserInfo.scss';

interface Props {
  user: User | undefined;
}

export const UserInfo: React.FC<Props> = ({ user }) => {
  return (
    user ? (
      <div className="UserInfo">
        <div className="UserInfo__avatar">.</div>
        <div>
          <div className="UserInfo__name">{user.name}</div>
          <div className="UserInfo__email">{user.email}</div>
        </div>
      </div>
    ) : null
  );
};
