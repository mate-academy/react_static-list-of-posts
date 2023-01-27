import React from 'react';
import { User } from '../../react-app-env';
import './UserInfo.scss';

type Props = {
  user: User;
};

export const UserInfo: React.FC<Props> = ({ user }) => {
  const {
    name,
    email,
  } = user;

  return (
    <p>
      {' Posted by  '}
      {user && (
        <a className="UserInfo" href={`mailto:${email}`}>
          {name}
        </a>
      )}
    </p>
  );
};
