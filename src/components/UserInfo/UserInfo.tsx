import React from 'react';
import { User } from '../../react-app-env';

type Props = {
  user: User,
};

export const UserInfo: React.FC<Props> = ({ user }) => (
  <section className="box notification">
    <h4 data-cy="user-name">{user.name}</h4>
    <a data-cy="user-email" href="email">{user.email}</a>
  </section>
);
