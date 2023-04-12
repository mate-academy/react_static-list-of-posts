import React from 'react';
import { User } from '../../types/User';
import './UserInfo.scss';

export interface Props {
  user: User
}

export const UserInfo: React.FC<Props> = ({ user }) => {
  const {
    email,
    name,
  } = user;

  return (
    <a className="UserInfo" href={`mailto:${email}`}>
      {name}
    </a>
  );
};
