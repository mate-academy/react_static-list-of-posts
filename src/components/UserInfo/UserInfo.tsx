import React from 'react';

import { User } from '../../types/User';
import './UserInfo.scss';

type Props = {
  user: User;
};

export const UserInfo: React.FC<Props> = ({ user }) => (
  <div className="user">
    <img className="user__avatar" src="./images/avatar_2.png" alt="avatar" />
    <h4 className="user__name">
      {user.name}
    </h4>
    <a className="user__email" href={`mailto: ${user.email}`}>
      {user.email}
    </a>
  </div>
);
