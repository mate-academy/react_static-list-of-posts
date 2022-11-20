import React from 'react';
import { User } from '../../types/User';

type Proto = {
  user: User,
};

export const UserInfo: React.FC<Proto> = ({ user }) => {
  const {
    name,
    email,
  } = user;

  return (
    <>
      <p>
        {' Posted by  '}

        <a className="UserInfo" href={`mailto:${email}`}>
          {name}
        </a>
      </p>
    </>
  );
};
