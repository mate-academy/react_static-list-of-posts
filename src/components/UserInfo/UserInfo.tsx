import React from 'react';
import { User } from '../../type/User';

type Props = {
  user: User
};

export const UserInfo: React.FC<Props> = ({ user: { name, email } }) => (
  <p>
    {' Posted by  '}
    <a className="UserInfo" href={`mailto:${email}`}>
      {name}
    </a>
  </p>
);
