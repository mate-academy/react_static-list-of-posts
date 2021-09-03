import React from 'react';
import './UserInfo.scss';

type Props = {
  user: User | null;
};

export const UserInfo: React.FC<Props> = ({ user }) => {
  return (
    <div className="user">
      <div>
        {'Author: '}
        {user && user.name}
      </div>
      <div>
        {'Email: '}
        {user && user.email}
      </div>
    </div>
  );
};
