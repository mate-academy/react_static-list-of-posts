import React from 'react';
import { User } from '../types/user';

type Props = User;

export const UserInfo:React.FC<Props> = (
  {
    name,
    username,
    email,
  },
) => {
  return (
    <>
      <p>
        {`Name: ${name}`}
      </p>
      <p>
        {`UserName: ${username}`}
      </p>
      <a href="email">
        {`Email: ${email}`}
      </a>
    </>
  );
};
