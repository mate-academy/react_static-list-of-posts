import React from 'react';
import { User } from '../types/User';
import './UserInfo.scss';

type Props = {
  user: User | null;
};

export const UsersInfo: React.FC<Props> = ({ user }) => {
  return (
    <div className="UserInfo">
      <p className="UserInfo__item" data-cy="name">
        {user ? user.name : null}
      </p>

      <p className="UserInfo__item" data-cy="email">
        {user ? user.email : null}
      </p>
    </div>
  );
};
