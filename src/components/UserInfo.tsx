import React from 'react';

import { User } from '../types/User';

type Props = {
  user: User;
};

export const UserInfo: React.FC<Props> = ({ user }) => {
  return (
    <>
      <p><strong>{user.name}</strong></p>
      <p>{user.email}</p>
    </>
  );
};
