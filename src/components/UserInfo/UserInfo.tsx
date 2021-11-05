import React from 'react';
import { User } from '../../typedefs';
import './UserInfo.scss';

type Props = {
  user: User,
};

export const UserInfo: React.FC<Props> = ({ user }) => {
  return (
    <div>
      <p>{user.name}</p>
      <p>
        <a className="link" href={`mailto:${user.email}`}>
          {user.email}
        </a>
      </p>
    </div>
  );
};
