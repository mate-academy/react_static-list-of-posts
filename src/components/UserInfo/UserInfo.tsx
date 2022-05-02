import React from 'react';

import './UserInfo.scss';

import { User } from '../../types/User';

type Props = User;

export const UserInfo: React.FC<Props> = ({ name, email }) => {
  return (
    <div className="user">
      <h3 data-cy="name" className="user__name">{name}</h3>
      <h4 data-cy="email" className="user__email">{email}</h4>
    </div>
  );
};
