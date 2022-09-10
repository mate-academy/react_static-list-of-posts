import React from 'react';
import { UserFromServer } from '../../types/UserFromServer';

import './UserInfo.scss';

type Props = {
  user: UserFromServer;
};

export const UserInfo: React.FC<Props> = ({ user: { name, email } }) => (
  <a className="UserInfo" href={`mailto:${email}`}>
    {name}
  </a>
);
