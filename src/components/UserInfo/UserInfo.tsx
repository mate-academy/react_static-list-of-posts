import React from 'react';
import { User } from '../../react-app-env';

import './UserInfo.scss';

type Props = {
  user: User;
};

export const UserInfo: React.FC<Props> = ({ user }) => (
  <>
    <h2 data-cy="user-name" className="title is-3 ml-4">{user.name}</h2>
    <div data-cy="user-email" className="title is-4 ml-4">{user.email}</div>
  </>
);
