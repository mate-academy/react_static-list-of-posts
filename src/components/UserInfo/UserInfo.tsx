import React from 'react';
import { User } from '../../app.typedefs';

import './UserInfo.scss';

type Props = {
  user: User;
};

export const UserInfo: React.FC<Props> = ({ user }) => (
  <>
    <p data-cy="user-name">{`Username: ${user.name}`}</p>
    <p data-cy="user-email">{`Email: ${user.email}`}</p>
  </>
);
