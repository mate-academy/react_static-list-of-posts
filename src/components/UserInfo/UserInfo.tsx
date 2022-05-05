import React from 'react';
import './UserInfo.scss';

import { User } from '../../types/User';

interface Props {
  props: User,
}

export const UserInfo: React.FC<Props> = ({ props }) => (
  <div className="user">
    <p className="user__name" data-cy="name">{props.name}</p>
    <p className="user__email" data-cy="email">{props.email}</p>
  </div>
);
