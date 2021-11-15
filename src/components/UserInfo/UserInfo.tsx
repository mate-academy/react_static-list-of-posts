import React from 'react';
import './UserInfo.scss';

type UserFields = {
  name: string | undefined,
  email: string | undefined
};

export const UserInfo: React.FC<UserFields> = ({ name, email }) => (
  <div className="ccc">
    <div className="name">
      {name}
    </div>
    <div className="user-info">
      {email}
    </div>
  </div>
);
