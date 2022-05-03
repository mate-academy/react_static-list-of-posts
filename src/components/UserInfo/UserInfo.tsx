import React from 'react';
import { User } from '../../types/User';

import './UserInfo.scss';

type Props = {
  user: User ,
};

export const UserInfo: React.FC<Props> = ({ user }) => (
  <>
    <p className="user__name">{user.name}</p>
    <p className="user__email">{user.email}</p>
  </>
);
