import React from 'react';
import { UserType } from '../../types';

export function User({ user }) {
  const { address } = user;

  return (
    <p>
      <span className="user__name">{user.name}</span>
      <br />
      <a href={`mailto:${user.email}`}>{user.email}</a>
      <br />
      <span className="user__address">
        {`
          ${address.city},
          ${address.suite},
          ${address.street},
          ${address.zipcode}
        `}
      </span>
    </p>
  );
}

User.propTypes = {
  user: UserType.isRequired,
};
