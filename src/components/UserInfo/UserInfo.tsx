import React from 'react';
import { User } from '../Types/Types';

type Props = {
  user: User;
};

export const UserInfo: React.FC<Props> = ({ user }) => (
  <>
    <li data-cy="name">
      {`UserName: ${user.name}`}
    </li>
    <li data-cy="email">
      {`UserEmail: ${user.email}`}
    </li>
  </>
);
