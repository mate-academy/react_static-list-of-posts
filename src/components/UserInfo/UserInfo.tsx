import React from 'react';
import { User } from '../../types/user';
import './UserInfo.scss';

type Props = {
  user: User | null,
};

export const UserInfo: React.FC<Props> = ({ user }) => {
  if (user === null) {
    return (
      <span className="UserInfo">
        unknown user
      </span>
    );
  }

  const {
    name,
    email,
  } = user;

  return (
    <a className="UserInfo" href={`mailto:${email}`}>
      {name}
    </a>
  );
};
