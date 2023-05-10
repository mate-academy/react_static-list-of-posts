import React from 'react';
import { User } from '../../types/User';
import './UserInfo.scss';

interface UserInfoProbs {
  user: User | null,
}

export const UserInfo: React.FC<UserInfoProbs> = (props) => (
  <a className="UserInfo" href={`mailto:${props.user?.email}`}>
    {props.user?.name}
  </a>
);
