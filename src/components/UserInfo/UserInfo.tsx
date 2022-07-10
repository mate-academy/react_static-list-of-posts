import React from 'react';
import { User } from '../../types';
import './UserInfo.scss';

type UserInfoProps = {
  user: User | null
};

export const UserInfo: React.FC<UserInfoProps> = (props) => {
  return (
    <div>
      {
        props.user && (
          <>
            <div data-cy="username">{props.user.name}</div>
            <div data-cy="email">{props.user.email}</div>
          </>
        )
      }
    </div>
  );
};
