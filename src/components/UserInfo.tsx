import React from 'react';
import { User } from '../types/User';

type Props = {
  user: User,
};

export const UserInfo: React.FC<Props> = ({ user }) => (
  <div className="user_name">
    {user.name}
    -
    {user.email}
  </div>
);
