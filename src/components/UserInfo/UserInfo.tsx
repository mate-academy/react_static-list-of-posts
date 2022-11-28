import React from 'react';
import usersFromServer from '../../api/users';
import { User } from '../../types/User';

type Props = {
  userId: number,
};

function getUser(userId: number): User | null {
  const user = usersFromServer.find(client => userId === client.id);

  return user || null;
}

export const UserInfo: React.FC<Props> = ({ userId }) => {
  const person = getUser(userId);

  return (
    <p>
      {' Posted by  '}

      <a
        className="UserInfo"
        href={`mailto:${person?.email}`}
      >
        {person?.name}
      </a>
    </p>
  );
};
