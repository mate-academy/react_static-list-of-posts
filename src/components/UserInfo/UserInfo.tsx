import React from 'react';
import { User } from '../../types/User';

import './UserInfo.scss';

type Props = {
  user: User,
};

export const UserInfo: React.FC<Props> = ({ user }) => (
  <>
    <div className="user" key={user.id}>
      <h3 className="user__title">USER INFO</h3>
      <div className="user__info">
        <p className="user-name" data-cy="user-name">
          {`Name: ${user.name}`}
        </p>

        <a
          href={`mailto:${user.email}`}
          className="user-email"
          data-cy="user-email"
        >
          {`Email: ${user.email}`}
        </a>
      </div>
    </div>
  </>
);
