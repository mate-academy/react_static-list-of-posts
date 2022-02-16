import React from 'react';
import { User } from '../../types/User';
import './User.scss';

export const UserInfo: React.FC<User> = ({ name, email }) => (
  <>
    <p className="user__name">{name}</p>
    <p className="user__email">{email}</p>
  </>
);
