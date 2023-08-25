import React from 'react';
import { User } from '../../types/User';

type UserProp = {
  user: User,
};

export const UserInfo: React.FC<UserProp> = ({ user }) => (
  <a className="UserInfo" href={`mailto:${user.email}`}>
    {user.name}
  </a>
);
