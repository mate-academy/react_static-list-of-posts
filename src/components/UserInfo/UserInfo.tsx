import React from 'react';
import './UserInfo.scss';

import { User } from '../../types/user';

type Props = {
  user: User
};

export const UserInfo: React.FC<Props> = ({ user }) => {
  const {
    name,
    username,
    email,
  } = user;

  return (
    <>
      {` Posted by  ${username} `}

      <a className="UserInfo" href={`mailto:${email}`}>
        {name}
      </a>
    </>
  );
};
