import React from 'react';
import './UserInfo.scss';
import { User } from '../types/User';

type Props = {
  user: User;
};

export const UserInfo: React.FC<Props> = ({ user }) => {
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
