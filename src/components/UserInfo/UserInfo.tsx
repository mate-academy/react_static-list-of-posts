import React from 'react';
import { User } from '../../types/User';
import './UserInfo.scss';

type Props = {
  user?: User,
};

export const UserInfo: React.FC<Props> = ({ user }) => {
  return user ? (
    <a className="UserInfo" href={`mailto:${user.email}`}>
      {user.name}
    </a>
  ) : (
    <span className="UserInfo">
      Anonymous
    </span>
  );
};
