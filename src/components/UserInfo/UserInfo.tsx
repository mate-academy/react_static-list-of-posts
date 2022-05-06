import React from 'react';
import { User } from '../../../../react_static-list-of-todos/src/data/user';

type Props = {
  user: User | null,
};

const UserInfo: React.FC<Props> = ({ user }) => (
  <>
    <p data-cy="name">
      <strong>user name:</strong>
      {' '}
      {user?.name}
    </p>
    <p data-cy="email">
      <strong>user email:</strong>
      {' '}
      {user?.email}
    </p>
  </>
);

export default UserInfo;
