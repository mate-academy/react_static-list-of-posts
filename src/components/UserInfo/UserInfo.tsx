import React from 'react';
import { User } from '../../react-app-env';

import './UserInfo.scss';

type Props = {
  user: User;
};

export const UserInfo: React.FC<Props> = ({ user }) => (
  <>
    <h3 data-cy="user-name">{`Author - ${user.name}`}</h3>
    <a href={user.email} data-cy="user-email">{`Author email - ${user.email}`}</a>
  </>
);
