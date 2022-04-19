import React from 'react';
import { User } from '../Types/Types';

type Props = {
  user: User;
};

export const UserInfo: React.FC<Props> = ({ user }) => (
  <>
    <p data-cy="name">
      {user.name}
    </p>
    <p data-cy="email">
      {user.email}
    </p>
  </>
);
