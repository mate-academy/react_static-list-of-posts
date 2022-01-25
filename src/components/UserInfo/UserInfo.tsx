import React from 'react';
import { User } from '../../types/User';

import './UserInfo.scss';

type Props = {
  user: User | null;
};

export const UserInfo: React.FC<Props> = ({ user }) => (
  <div className="User">
    {user && (
      <>
        <p className="User__name">
          Name:
          {' '}
          {user.name || 'No name'}
        </p>
        <p className="User__email">
          Email:
          {' '}
          {user.email || 'Unknown email'}
        </p>
      </>
    )}
  </div>
);
