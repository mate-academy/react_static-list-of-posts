import React from 'react';
import { User } from '../types/User';

export const UserInfo: React.FC<User> = ({ name, email }) => (
  <>
    <span className="user-header__author-name">{name}</span>
    <span className="user-header__author-email">{email}</span>
  </>
);
