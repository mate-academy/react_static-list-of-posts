import React from 'react';
import './UserInfo.scss';
import { User } from '../../react-app-env';

interface Props {
  user: User;
}

export const UserInfo: React.FC<Props> = ({ user }) => (
  <div className="user-data">
    <p className="user-data__name" data-cy="user-name">
      {`User name: ${user.name}`}
    </p>
    <p className="user-data__email" data-cy="user-email">
      {`User email: ${user.email}`}
    </p>
  </div>
);
