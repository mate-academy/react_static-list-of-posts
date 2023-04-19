import React from 'react';
import { User } from '../../types/types';

type Props = {
  users: User[];
  userId: number;
};

export const UserInfo: React.FC<Props> = ({ users, userId }) => {
  const user: User | undefined = users.find((
    currentUser: User,
  ) => currentUser.id === userId);

  if (!user) {
    return null;
  }

  return (
    <a className="UserInfo" href={`mailto:${user.email}`}>
      {user.name}
    </a>
  );
};
