import React from 'react';
import { User } from '../User';

type Props = {
  user: User | null;
};

export const UsersInfo: React.FC<Props> = ({ user }) => {
  return (
    <div className="UserInfo">
      <p className="UserInfo__item" data-cy="name">
        {user ? user.name : null}
      </p>

      <p className="UserInfo__item">
        <span>
          {user ? user.username : null}
        </span>
      </p>

      <p className="UserInfo__item" data-cy="email">
        {user ? user.email : null}
      </p>
    </div>
  );
};
