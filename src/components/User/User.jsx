import React from 'react';
import { userType } from '../../types';

import './User.css';

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
  user: userType.isRequired,
};
