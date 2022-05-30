import React from 'react';
import { User } from '../../react-app-env';

import './UserInfo.scss';

export interface Props {
  user: User;
}

export const UserInfo: React.FC<Props> = ({ user }) => (
  <>
    <div>
      <p className="title is-6" data-cy="user-name">{user.name}</p>
      <p className="title is-6" data-cy="user-email"><i>{user.email}</i></p>
    </div>
  </>
);
