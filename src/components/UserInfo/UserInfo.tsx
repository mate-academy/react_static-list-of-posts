import React from 'react';
import { User } from '../../api/types/User';

type Props = {
  user?: User,
};

export const UserInfo: React.FC<Props> = ({ user }) => (
  <div className="card">
    <span data-cy="username" className="title is-4">
      {user?.name}
    </span>
    <a
      href="mailto:{user?.email}"
      data-cy="email"
      className="title is-4"
    >
      {` ${user?.email}`}
    </a>
  </div>
);
