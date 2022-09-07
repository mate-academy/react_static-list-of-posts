import React from 'react';
import { User } from '../../types/User';
import usersFromServer from '../../api/users';

interface Props {
  userId: number;
}

const users: User[] = usersFromServer;

export const UserInfo: React.FC<Props> = ({ userId }) => (

  <>
    {
      users.map(user => {
        return user.id === userId && (
          <a key={user.id} className="UserInfo" href={`mailto:${user.email}`}>
            {user.name}
          </a>
        );
      })
    }
  </>
);
