import React from 'react';
import './UserInfo.scss';

export interface User {
  name: string,
  email: string,
}

type Props = {
  user: User | null,
};

export const UserInfo: React.FC<Props> = ({ user }) => {
  return (
    <div className="user">
      <p className="user__info">
        User:&nbsp;
        {user?.name}
        <br />
        Email:&nbsp;
        {user?.email}
      </p>
    </div>
  );
};
