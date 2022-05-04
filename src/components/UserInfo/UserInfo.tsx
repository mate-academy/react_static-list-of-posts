import React from 'react';
import { User } from '../../Types/User';
import './UserInfo.scss';

type Props = {
  user: User;
};

export const UserInfo: React.FC<Props> = ({ user }) => (
  <>
    <div 
      data-cy="name" 
      className="userInfo__name"
    >
      <strong>{user.name}</strong>
    </div>
    <span>Email: </span>
    <a
      data-cy="email" 
      className="userInfo__email" 
      href={`mailto:${user.email}}`}
    >
      {user.email}
    </a>
  </>
);
