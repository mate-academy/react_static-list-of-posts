import React from 'react';

export const UserInfo: React.FC<User> = ({
  name,
  username,
  email,
}) => (
  <>
    {name}
    {username}
    {email}
  </>
);
