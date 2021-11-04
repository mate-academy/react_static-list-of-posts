import React from 'react';
import './UserInfo.scss';

type Props = {
  name: string,
  email: string,
};

export const UserInfo: React.FC<Props> = ({ name, email }) => {
  return (
    <div>
      <p>{name}</p>
      <p>{email}</p>
    </div>
  );
};
