import React from 'react';
import { User } from '../../types/User';

type Props = {
  user: User | null;
};

export const UserInfo: React.FC<Props> = ({ user }) => (
  <>
    <p data-cy="name">
      <strong>User Name:</strong>
      {` ${user?.name}`}
    </p>

    <p data-cy="email">
      <strong>Contact:</strong>
      {` ${user?.email}`}
    </p>
  </>
);
