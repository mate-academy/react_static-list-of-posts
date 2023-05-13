import React from 'react';
import './UserInfo.scss';

import { User } from '../../types/user';

type Props = {
  user: User | null,
};

export const UserInfo: React.FC<Props> = ({ user }) => (
  <>
    {user && (
      <a className="UserInfo" href={`mailto:${user.email}`}>
        {user.name}
      </a>
    )}
  </>
);
