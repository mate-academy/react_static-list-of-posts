import React from 'react';
import { UserType } from '../types';

export const User = ({ name, email, address }) => (
  <div className="post__user">
    <span className="post__user-name">{name}</span>
    {' '}
    <a
      className="post__user-email"
      href={`mailto:${email}`}
    >
      {email}
    </a>
    {' '}
    <span className="post__user-address">
      {address.city}
      {' '}
      {address.street}
      {' '}
      {address.suite}
    </span>
  </div>
);

User.propTypes = UserType.isRequired;
