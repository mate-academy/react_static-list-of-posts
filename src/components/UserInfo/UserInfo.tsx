import React from 'react';
import { User } from '../types/User';

import './UserInfo.scss';

type Props = {
  user: User;
};

export const UserInfo: React.FC<Props> = ({ user }) => (
  <div className="list">
    <div className="listItem">
      Name:
      {' '}
      <span>{`${user.name}`}</span>
    </div>
    <div className="listItem">
      Email:
      {' '}
      <span>{`${user.email}`}</span>
    </div>
    <div className="listItem">
      Phone:
      {' '}
      <span>{`${user.phone}`}</span>
    </div>
    <div className="listItem">
      Personal website:
      {' '}
      <span>{`${user.website}`}</span>
    </div>
  </div>
);
