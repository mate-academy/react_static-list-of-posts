import React from 'react';
import { UserType } from '../../Types/UserType';

import './UserInfo.scss';

type Props = {
  user: UserType,
};

export const UserInfo: React.FC<Props> = ({ user }) => (
  <a className="UserInfo" href={`mailto:${user.email}`}>
    {user.name}
  </a>
);
