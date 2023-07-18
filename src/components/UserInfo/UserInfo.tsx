import React from 'react';
import { User } from '../../types/User';

type UserProps = {
  user: User | undefined;
};

export const UserInfo: React.FC<UserProps> = ({ user }) => {
  if (!user) {
    return <></>;
  }

  const { email, name } = user;

  return (
    <p>
      {' Posted by  '}

      <a className="UserInfo" href={`mailto:${email}`}>
        {name}
      </a>
    </p>
  );
};
