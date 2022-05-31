import React from 'react';
import { User } from '../../react-app-env';

type Props = {
  user: User,
};

export const UserInfo: React.FC<Props> = ({ user }) => (
  <section className="box notification">
    <h4>{user.name}</h4>
    <a href="email">{user.email}</a>
  </section>
);
