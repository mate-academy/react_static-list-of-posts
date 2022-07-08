import React from 'react';

export interface User {
  name: string,
  email: string,
}

type Props = {
  user: User | null;
};

export const UserInfo:React.FC<Props> = ({ user }) => {
  if (!user) {
    return null;
  }

  return (
    <div className="user">
      <div className="name" data-cy="user-name">{`Name: ${user.name}`}</div>
      <div className="email" data-cy="user-email">{`Email: ${user.email}`}</div>
    </div>
  );
};
