import React from 'react';
import { User } from '../../types/user';
import './UserInfo.scss';

type Props = {
  user: User | null,
};

export const UserInfo: React.FC<Props> = ({ user }) => (
  <ul className="user">
    {user && (
      <>
        <p className="user__userName" data-cy="user-name">
          {user.name}
        </p>

        <p className="user__userEmail" data-cy="user-email">
          {user.email}
        </p>
      </>
    )}
  </ul>
);
