import React from 'react';
import { User } from '../../react-app-env';
import './UserInfo.scss';

interface Props {
  user: User;
}

export const UserInfo: React.FC<Props> = ({ user }) => (
  <ul>
    <b> User info:</b>
    <li data-cy="user-name">{user.name}</li>
    <li data-cy="user-email">{user.email}</li>
  </ul>
);

// 1. The `UserInfo` accepts a `user` object and renders at least a `name` and an
//   `email`.
//    - Please, add `data-cy="user-name"` and `data-cy="user-email"` attributes
//    to `name` and `email` elements.
