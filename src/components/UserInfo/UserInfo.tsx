import React from 'react';
import { UserFromServer } from '../../types/Users';

type Props = {
  user: UserFromServer | null;
};

export const UserInfo: React.FC<Props> = ({ user }) => (
  <a className="UserInfo" href={`mailto:${user?.email}`}>
    {user?.name}
  </a>
);
