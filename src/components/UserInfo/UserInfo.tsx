import React from 'react';
import { User } from '../../types/User';

import './UserInfo.scss';

type Props = {
  user: User;
};

export const UserInfo: React.FC<Props> = ({ user }) => {
  return (
    <div className="user">
      <p className="user__information" data-cy="user-name">
        {`Name: ${user.name}`}
      </p>
      <p className="user__information" data-cy="user-email">
        {`Email: ${user.email}`}
      </p>
    </div>
  );
};
