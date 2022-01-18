import React from 'react';
import './UserInfo.scss';

export type Prors = {
  name: string,
  email: string,
};

export const UserInfo: React.FC<Prors> = ({ name, email }) => (
  <div className="userInfo">
    <span className="userInfo__name">
      {name}
      {' '}
      -
    </span>
    <span className="userInfo__email">
      {email}
    </span>
  </div>
);
