import React from 'react';
import { User } from '../types/User';

type Props = {
  user: User;
};

export const UserInfo: React.FC<Props> = ({ user }) => {
  const { name, email } = user;

  return (
    <>
      <h1>User:</h1>
      <ul>
        <li>
          {`User: ${name}`}
        </li>
        <li>
          {`Email: ${email}`}
        </li>
      </ul>
    </>
  );
};
