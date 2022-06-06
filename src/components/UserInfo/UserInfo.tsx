import React from 'react';
import { User } from '../../typedefs';
import './UserInfo.scss';

type Props = {
  user: User | undefined
};

export const UserInfo: React.FC<Props> = ({ user = null }) => (
  user && (
    <>
      <p>{user.name}</p>
      <p>{user.email}</p>
    </>
  ));
