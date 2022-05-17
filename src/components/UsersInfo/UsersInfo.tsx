import React from 'react';
import { User } from '../../types/Types';
import './UserInfo.scss';

type Props = {
  user: User | null;
};

export const UsersInfo: React.FC<Props> = ({ user }) => {
  return (
    <div className="UserInfo">
      {user ? (
        <p className="UserInfo__item" data-cy="name">
          {user.name}
        </p>
      ) : null}

      {user ? (
        <p className="UserInfo__item" data-cy="email">
          {user.email}
        </p>
      ) : null}

    </div>
  );
};
