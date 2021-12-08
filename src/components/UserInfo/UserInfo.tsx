import React from 'react';
import { User } from '../../types/User';

type Props = {
  user: User;
};

export const UserInfo: React.FC<Props> = ({ user }) => {
  return (
    <div className="userInfo">
      <div className="userInfo__name">
        {user.name}
      </div>

      <a href="true" className="userInfo__email">
        {user.email}
      </a>
    </div>
  );
};
