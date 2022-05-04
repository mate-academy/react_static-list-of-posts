import React from 'react';

import { User } from '../../types/types';

type Props = {
  user: User | undefined;
};

export const UserInfo: React.FC<Props> = ({ user }) => {
  return (
    <>
      {user && (
        <div className="userInfo">
          <p data-cy="name">
            {user.name}
          </p>
          <p data-cy="email">
            {user.email}
          </p>
        </div>
      )}
    </>
  );
};
