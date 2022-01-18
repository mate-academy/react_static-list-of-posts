import React from 'react';

import './UserInfo.scss';

export const UserInfo: React.FC<User> = ({
  name,
  email,
}) => (
  <>
    <div className="user-name">{name}</div>
    <div className="user-email">{`Email: ${email}`}</div>
  </>
);
