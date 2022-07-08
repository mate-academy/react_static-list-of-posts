import React from 'react';
import { User } from '../../types/User';

import './UserInfo.scss';

type Props = {
  user: User,
};

export const UserInfo: React.FC<Props> = ({ user }) => (
  <article className="userAbout">
    <div className="userAbout__name" data-cy="user-name">
      {user.name}
    </div>

    <div className="userAbout__email" data-cy="user-email">
      {user.email}
    </div>
  </article>
);
