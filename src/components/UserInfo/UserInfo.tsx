import React from 'react';

import './UserInfo.scss';
import { User } from '../../types/User';

type Props = Omit<User, 'id'>;

export const UserInfo: React.FC<Props> = ({
  name,
  email,
}) => (
  <div className="UserInfo">
    <p className="UserInfo__name">{name}</p>
    <a href={`mailto:${email}`} className="UserInfo__email">{email}</a>
  </div>
);
