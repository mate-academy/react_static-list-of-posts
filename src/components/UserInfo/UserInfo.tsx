import React from 'react';
import { User } from '../../types/User';
import './UserInfo.scss';

type Props = {
  name: User['name'],
  email: User['email']
};

export const UserInfo: React.FC<Props> = ({ name, email }) => (
  <p>
    {' Posted by  '}

    <a className="UserInfo" href={`mailto:${email}`}>
      {name}
    </a>
  </p>
);
