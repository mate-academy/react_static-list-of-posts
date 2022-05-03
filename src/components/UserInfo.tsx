import React from 'react';

export const UserInfo: React.FC<User> = ({
  name,
  email,
}) => (
  <div className="item">
    <div className="header"><b>{name}</b></div>
    <div className="meta">{email}</div>
  </div>
);
