import React from 'react';
import { UserFromServer } from '../../types/UserFromServer';

import './UserInfo.scss';

type Props = {
  user: UserFromServer;
};

export const UserInfo: React.FC<Props> = ({ user }) => (
  <a className="UserInfo" href={`mailto:${user.email}`}>
    {user.name}
  </a>
);
