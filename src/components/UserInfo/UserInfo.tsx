import React from 'react';
import { User } from '../../types';
import './UserInfo.scss';

type Props = {
  user: User,
};

export const UserInfo: React.FC<Props> = ({ user }) => (
  <p className="user-info">
    {`From ${user.name}, ${user.email} to:`}
  </p>
);
