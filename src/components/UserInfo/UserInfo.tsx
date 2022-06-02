import React from 'react';
import { User } from '../../react-app-env';
import './UserInfo.scss';

interface Props {
  user: User,
}

export const UserInfo: React.FC<Props> = ({ user }) => (
  <>
    <p className="post-author" data-cy="user-name">
      {user.name}
    </p>
    <p className="post-author__email" data-cy="user-email">
      {user.email}
    </p>
  </>
);
