import React from 'react';

import { User } from '../../types/User';

type Props = {
  user: User | undefined
};

export const UserInfo: React.FC<Props> = ({ user }) => (
  <p>{user && (`${user.name} - ${user.email}`)}</p>
);
