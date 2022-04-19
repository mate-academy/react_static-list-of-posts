import React from 'react';
import { User } from '../../types/User';
import './UserInfo.scss';

type Props = {
  user: User
};

export const UserInfo: React.FC<Props> = ({ user }) => (
  <div className="user-info">
    <i className="fa fa-user" />
    {' '}
    <span
      className="user-info__name"
      data-cy="name"
    >
      {user.name}
    </span>
    {' | '}
    <i className="fa fa-envelope" />
    {' '}
    <span
      className="user-info__email"
      data-cy="email"
    >
      <a href={`mailto: ${user.email}`}>
        {user.email}
      </a>
    </span>
  </div>
);
