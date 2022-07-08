import React from 'react';
import { User } from '../../app.typedef';

import './UserInfo.scss';

interface Props {
  user: User;
}

export const UserInfo: React.FC<Props> = ({ user }) => {
  return (
    <div className="user-info">
      <h3 data-cy="user-name" className="user-info__name">{user.name}</h3>
      <p data-cy="user-email">
        <a
          href="email"
          data-cy="comment-email"
          className="comment__email"
        >
          {user.email}
        </a>
      </p>
    </div>
  );
};
