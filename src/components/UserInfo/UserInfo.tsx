import React from 'react';
import { User } from '../Types/Types';

type Props = {
  user: User
};

export const UserInfo: React.FC<Props> = ({ user }) => (
  <>
    <li data-cy="user-name">
      {`Username: ${user.name}`}
    </li>
    <li data-cy="user-email">
      {`Email: ${user.email}`}
    </li>
  </>
);
