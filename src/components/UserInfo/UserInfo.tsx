import React from 'react';
import { User } from '../../types/User';

interface Props {
  user: User,
}

export const UserInfo: React.FC<Props> = ({ user }) => (
  <div className="User">
    <h2 className="User__title">User info</h2>
    <p className="User__name">{user.name}</p>
    <p className="User__email">{user.email}</p>
  </div>
);
