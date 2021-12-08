import React from 'react';
import { User } from '../../types/types';
import './UserInfo.scss';

type Props = {
  user: User,
};

export const UserInfo: React.FC<Props> = ({ user }) => (
  <div className="UserInfo">
    <div className="UserInfo__content">
      <p className="UserInfo__email">
        {user.email}
      </p>
      <p className="UserInfo__name">
        {user.name}
      </p>
    </div>
  </div>
);
