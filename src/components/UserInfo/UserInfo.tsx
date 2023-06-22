import React from 'react';
import './UserInfo.scss';
import { UserType } from '../../Types/UserType';

type Props = {
  user: UserType,
};

export const UserInfo: React.FC<Props> = ({ user }) => (
  <a className="UserInfo" href={`mailto:${user.email}`}>
    {user.name}
  </a>
);
