import React from 'react';
import { User } from '../Types/User';

type Props = {
  user: User | null;
};

export const UserInfo: React.FC<Props> = ({ user }) => (
  <div className="User">
    <h3 className="User__name" data-cy="name">{user?.name}</h3>
    <p className="User__email" data-cy="email">{user?.email}</p>
  </div>
);
