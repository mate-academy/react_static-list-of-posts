import React from 'react';
import { UserShape } from '../shapes/UserShape';

export function User({ user }) {
  const address = `${user.address.city},
  ${user.address.street}, ${user.address.suite}. `;

  return (
    <div className="post__author">
      <p className="post__author-name">{user.name}</p>
      <p>{user.email}</p>
      <p>{address}</p>
    </div>
  );
}

User.propTypes = UserShape;
