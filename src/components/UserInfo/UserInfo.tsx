import React from 'react';
import { User } from '../../types/Types';
import './UserInfo.scss';

type Props = {
  users: User[] | null,
};

export const UserInfo: React.FC<Props> = ({ users }) => (
  <div className="UserInfo">
    {users?.map(user => (
      <div>
        <span className="UserInfo--Nick">
          {`${user.username}`}
        </span>
        <span className="UserInfo--Name">
          {`${user.name}`}
        </span>
        <a className="UserInfo--Email" href="email">
          {`${user.email}`}
        </a>
      </div>
    ))}
  </div>
);
