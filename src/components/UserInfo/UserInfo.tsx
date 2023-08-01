import React from 'react';
import { User } from '../../types/Users';
import './UserInfo.scss';

type Props = {
  user: User;
};

export const UserInfo: React.FC<Props> = ({
  user: {
    username, email, name,
  },
}) => (
  <p>
    {` Posted by ${username}: `}
    <a className="UserInfo" href={`mailto:${email}`}>
      {name}
    </a>
  </p>
);
