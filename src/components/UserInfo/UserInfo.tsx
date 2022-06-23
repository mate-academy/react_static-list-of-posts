import React from 'react';

import './UserInfo.scss';
import { User } from '../../types/interfaces';

type Props = {
  user: User
};
export const UserInfo: React.FC<Props> = ({ user }) => (
  <>
    <span data-cy="user-name">{user.name}</span>
    {' - '}
    <a href="email" data-cy="user-email">{user.email}</a>
  </>
);

export default UserInfo;
