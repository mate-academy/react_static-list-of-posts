import React from 'react';
import { User } from '../../types/User';

import './UserInfo.scss';

export const UserInfo: React.FC<User> = ({ name, email }) => {
  return (
    <div className="user">
      <h4 className="user__title">{name}</h4>
      <a href={`mailto:${email}`} className="user__email">{email}</a>
    </div>
  );
};
