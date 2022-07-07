import React from 'react';
import './UserInfo.scss';
import { User } from '../types/User';

export const UserInfo: React.FC<User> = ({ name, email }) => (
  <div className="posts__author">
    <span data-cy="user-name">{name}</span>
    <span data-cy="user-email">{` ----- ${email}`}</span>
  </div>
);
