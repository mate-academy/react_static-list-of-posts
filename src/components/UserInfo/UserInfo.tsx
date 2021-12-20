import React from 'react';
import { User } from '../../type/user';

type Props = {
  user: User | undefined
};

export const UserInfo: React.FC<Props> = ({ user }) => (
  <>
    {user?.name}
    {' - '}
    {user?.email}
  </>
);
