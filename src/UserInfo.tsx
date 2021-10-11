import React from 'react';
import { User } from './types/User';

type Props = {
  user: User,
};

export const UserInfo: React.FC<Props> = ({ user }) => {
  return (
    <span>{`Author: ${user.name} Email: ${user.email}` }</span>
  );
};
