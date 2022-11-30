import React from 'react';

import './UserInfo.scss';

import { User } from '../../types/User';

type Props = {
  user: User;
};

export const UserInfo: React.FC<Props> = ({ user }) => {
  const { name, email } = user;

  return (
    <p>
      Posted by&nbsp;

      <a className="UserInfo" href={`malito:${email}`}>
        {name}
      </a>
    </p>
  );
};
