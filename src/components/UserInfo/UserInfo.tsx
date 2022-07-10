import React from 'react';
import { User } from '../../types/users';

import './UserInfo.scss';

type Props = {
  user: User | null;
};

export const UserInfo: React.FC<Props> = ({ user }) => (
  <div className="user-info">
    {user && (
      <>
        <span>{`Username: ${user.name}`}</span>
        <a href={`mailto:${user.email}`} className="user-info-email">{user.email}</a>
      </>
    )}
  </div>
);
