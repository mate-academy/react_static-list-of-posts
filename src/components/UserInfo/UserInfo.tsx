import React from 'react';
import { UserInfoProps } from '../../types/User';

export const UserInfo: React.FC<UserInfoProps> = ({ user }) => (
  <a className="UserInfo" href={`mailto:${user?.email}`}>
    {user?.name}
  </a>
);
