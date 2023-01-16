import React from 'react';
import { Users } from '../../types/Users';
import usersFromServer from '../../api/users';

type Props = {
  userId: number,
};

export const UserInfo: React.FC<Props> = ({ userId }) => {
  const user: Users
  = usersFromServer.filter(person => person.id === userId)[0];

  return (
    <a className="UserInfo" href={`mailto:${user.email}`}>
      {user.name}
    </a>
  );
};
