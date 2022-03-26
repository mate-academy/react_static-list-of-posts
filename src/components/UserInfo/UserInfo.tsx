import React from 'react';

import { User } from '../../types/type';

import './UserInfo.scss';

type Props = {
  user: User
};

export const UserInfo: React.FC<Props> = ({ user }) => (
  <div className="user">
    <h3 className="user__name">
      {user.name}
    </h3>
    <a href={`mailto:${user.email}`} className="user__email">
      {user.email}
    </a>
  </div>

);
