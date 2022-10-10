import React from 'react';
import { User } from '../../Interfaces/User';

type UserProps = {
  user: User;
};

export const UserInfo: React.FC<UserProps> = ({ user }) => {
  const {
    name,
    username,
    email,
  } = user;

  return (
    <p>
      {` Posted by ${username}: `}

      <a className="UserInfo" href={`mailto:${email}`}>
        {name}
      </a>
    </p>
  );
};
