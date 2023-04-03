/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import { User } from '../../types/types';
import './UserInfo.scss';

export const UserInfo: React.FC<User> = ({ name, email }) => (
  <a className="UserInfo" href={`mailto:${email}`}>
    {name}
  </a>
);
