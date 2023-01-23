import React from 'react';
import { User } from '../../types/User';

interface Props {
  user: User;
}

export const UserInfo: React.FC<Props> = ({ user: { email, name } }) => (
  <p>
    {' Posted by  '}

    <a className="UserInfo" href={`mailto:${email}`}>
      {name}
    </a>
  </p>
);
