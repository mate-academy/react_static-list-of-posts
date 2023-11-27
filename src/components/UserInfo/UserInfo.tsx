import React from 'react';
import './UserInfo.scss';
import { User } from '../../types/User';

type Props = {
  user: User,
};

export const UserInfo: React.FC<Props> = ({
  user: {
    id,
    name,
    email,
  },
}) => (
  <p>
    {' Posted by  '}

    <a className="UserInfo" href={`mailto:${email}`} id={`${id}`}>
      {name}
    </a>
  </p>
);
