import React from 'react';
import { User } from '../../types/user';

type Props = {
  user: User | undefined
};

export const UserInfo: React.FC<Props> = ({ user }) => (
  <a className="UserInfo" href={`mailto:${user && user.email}`}>
    {user && user.name}
  </a>
);
