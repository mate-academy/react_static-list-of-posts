import * as React from 'react';
import { User } from '../../types';
import './UserInfo.scss';

type Props = {
  user: User,
};

export const UserInfo: React.FC<Props> = ({ user }) => (
  <p className="user-info">
    {`${user.name}: ${user.email}`}
  </p>
);
