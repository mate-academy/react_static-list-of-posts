import React from 'react';
import { User } from '../../types/UsersType';

type Props = {
  user: User;
};

export const UserInfo: React.FC<Props> = ({ user }) => (
  <a className="UserInfo" href={`mailto:${user.email}`}>
    {user.name}
  </a>
);
