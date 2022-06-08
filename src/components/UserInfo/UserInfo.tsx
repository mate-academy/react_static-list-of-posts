import React from 'react';
import { User } from '../../app.typedef';

import './UserInfo.scss';

interface Props {
  user: User;
}

export const UserInfo: React.FC<Props> = ({ user }) => {
  const {
    name,
    email,
  } = user;

  return (
    <div className="user-info">
      <h2 data-cy="user-name" className="user-info__name">{name}</h2>
      <p data-cy="user-email">
        {email}
      </p>
    </div>
  );
};
