import React from 'react';

export const UserInfo: React.FC<User> = ({ name, email }) => (
  <>
    <p className="post__user"><b>{name}</b></p>
    <p className="post__email">{email}</p>
  </>
);
