import React from 'react';
import { User } from '../../types/User';

interface PropsUser {
  user: User;
}

export const UserInfo: React.FC<PropsUser> = ({ user }) => (
  <a className="UserInfo" href={`mailto:${user.email}`}>
    {user.name}
  </a>
);
