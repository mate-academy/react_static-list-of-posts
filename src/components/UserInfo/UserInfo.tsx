import React from 'react';
import { User } from '../../types/User';
import './UserInfo.scss';

type Props = {
  userOne: User | null,
};

export const UserInfo: React.FC<Props> = ({ userOne }) => (
  <a className="UserInfo" href={`mailto:${userOne !== null && userOne.email}`}>
    {userOne !== null
    && userOne.name}
  </a>
);
