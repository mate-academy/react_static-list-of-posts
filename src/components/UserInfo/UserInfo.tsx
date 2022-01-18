import React from 'react';

export const UserInfo: React.FC<User> = ({ name, email }) => (
  <>
    <b className="Post__user">{name}</b>
    <p className="Post__email">{email}</p>
  </>
);
