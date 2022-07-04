import React from 'react';

import './UserInfo.scss';
import { User } from '../../types/User';

type Props = {
  user: User | undefined;
};

export const UserInfo: React.FC<Props> = ({ user }) => (
  <>
    <p>{user?.name}</p>
    <p>{user?.email}</p>
  </>
);
