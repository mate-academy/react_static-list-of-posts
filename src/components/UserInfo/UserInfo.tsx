import React from 'react';
import { UserInfoType } from '../../type/user';
import './UserInfo.scss';

export const UserInfo: React.FC<UserInfoType> = ({
  user: {
    email,
    name,
  },
}) => (
  <p>
    {' Posted by  '}

    <a className="UserInfo" href={`mailto:${email}`}>
      {name}
    </a>
  </p>
);
