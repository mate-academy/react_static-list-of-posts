import React from 'react';
import { User } from '../../types/User';
import './UserInfo.scss';

type Props = {
  user: User | null
};

export const UserInfo: React.FC<Props> = ({ user }) => (
  <div className="use-info">
    {`${user?.name} (${user?.email})`}
  </div>
);
