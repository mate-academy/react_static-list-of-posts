import React from 'react';
import { User } from '../../types/User';
import './UserInfo.scss';

type Props = User;

export const UserInfo: React.FC<Props> = ({ name, email }) => {
  return (
    <div className="user">
      <h4 data-cy="name" className="user__name">{name}</h4>
      <p data-cy="email" className="user__email">{email}</p>
    </div>
  );
};
