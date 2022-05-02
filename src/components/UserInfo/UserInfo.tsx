import React from 'react';
import { User } from '../../types/User';
import './UserInfo.scss';

type Props = Pick<User, 'name' | 'email'>;

export const UserInfo: React.FC<Props> = ({ name, email }) => (
  <div className="User">
    <h3 className="User__name" data-cy="name">{name}</h3>
    <p className="User__email" data-cy="email">{email}</p>
  </div>
);
