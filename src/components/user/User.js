import React from 'react';
import { UserShape } from '../shapes/UserShape';

export function User({ user }) {
  const { city, street, suite } = user.address;

  return (
    <div className="post__author">
      <p className="post__author-name">{user.name}</p>
      <p>{user.email}</p>
      <p>
        { city }
        {', '}
        {street}
        {', '}
        { suite }
      </p>
    </div>
  );
}

User.propTypes = UserShape;
