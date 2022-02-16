import React from 'react';

type Props = {
  name: string,
  username: string,
  email: string,
};

export const UserInfo: React.FC<Props> = ({ name, username, email }) => (
  <div>
    <p>{name}</p>
    <p>{username}</p>
    <p>{email}</p>
  </div>
);
