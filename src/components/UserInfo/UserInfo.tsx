import React from 'react';
import { User } from '../../types/user';
import './UserInfo.scss';

type Props = {
  user: User;
};

export const UserInfo: React.FC<Props> = ({ user }) => (
  <div className="user">
    <p className="user__name">
      {user.name}
    </p>
    <a href={`mailto:${user.email}`} className="user__email">
      {user.email}
    </a>
  </div>
);
