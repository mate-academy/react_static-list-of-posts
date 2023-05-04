import React from 'react';
import { User } from '../../types/User';
import './UserInfo.scss';

interface Probs {
  user: User | null,
}

export const UserInfo: React.FC<Probs> = (props) => (
  <a className="UserInfo" href={`mailto:${props.user?.email}`}>
    {props.user?.name}
  </a>
);
