import React from 'react';

import './UserInfo.scss';

export interface User {
  id: number,
  name: string,
  email: string,
}

type Props = {
  user: User | null | undefined;
};

export const UserInfo: React.FC<Props> = ({ user }) => {
  if (!user) {
    return null;
  }

  return (
    <div className="user">
      <div className="user-info" data-cy="user-name">
        <strong>Name: </strong>
        {user.name}
      </div>
      <div className="user-info user-info__last" data-cy="user-email">
        <strong>Email: </strong>
        {user.email}
      </div>
    </div>
  );
};
