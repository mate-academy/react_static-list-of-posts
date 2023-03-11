import React from 'react';
import { User } from '../../types/User';
import './UserInfo.scss';

export type Props = {
  user: User | null;
};

export const UserInfo: React.FC<Props> = ({ user }) => {
  if (!user) {
    throw new Error('there are no user');
  }

  const {
    name,
    email,
  } = user;

  return (
    <a className="UserInfo" href={`mailto:${email}`}>
      {name}
    </a>
  );
};
