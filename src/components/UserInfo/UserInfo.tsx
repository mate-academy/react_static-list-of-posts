import React from 'react';

import { User } from '../../types/User';

type Props = {
  user: User,
};

export const UserInfo:React.FC<Props> = ({ user }) => (
  <>
    <div><strong>{user.name}</strong></div>
    <div><strong>{user.email}</strong></div>
  </>
);
