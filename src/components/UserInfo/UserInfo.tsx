import React from 'react';
import { User } from '../../react-app-env';

interface Props {
  user: User,
}

export const UserInfo: React.FC<Props> = ({ user }) => (
  <>
    <p data-cy="user-name">{user.name}</p>
    <a
      data-cy="user-email"
      className="has-text-link"
      href={`mailto: ${user.email}`}
    >
      {user.email}
    </a>
  </>
);
