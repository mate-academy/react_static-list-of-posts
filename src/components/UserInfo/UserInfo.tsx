import React from 'react';
import { Users } from '../../types/User';

interface Props {
  user: Users;
}

export const UserInfo: React.FC<Props> = ({ user }) => (
  <a className="UserInfo" href={`mailto:${user.email}`}>
    {user.name}
  </a>
);
