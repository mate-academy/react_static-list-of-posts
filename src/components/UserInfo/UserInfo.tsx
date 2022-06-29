import React from 'react';
import { User } from '../../types/types';

import './UserInfo.scss';

type Props = {
  user: User | null,
};

export const UserInfo: React.FC<Props> = ({ user }) => {
  if (!user) {
    return null;
  }

  return (
    <>
      <div>{`Name: ${user.name}`}</div>
      <div>{`Email: ${user.email}`}</div>
    </>
  );
};
