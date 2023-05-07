import React from 'react';
import { User } from '../../types/user';

type Props = {
  user: User,
};

export const UserInfo: React.FC<Props> = ({ user }) => (
  <a className="UserInfo" key={user.id} href={`mailto:${user.email}`}>
    {user.name}
  </a>
);
