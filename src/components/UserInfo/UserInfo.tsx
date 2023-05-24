import React from 'react';
import { Users } from '../../types/Users';
import './UserInfo.scss';

type Props = {
  user: Users;
};

export const UserInfo: React.FC<Props> = ({
  user: {
    name,
    email,
  },
}) => (
  <a className="UserInfo" href={`mailto:${email}`}>
    {name}
  </a>
);
