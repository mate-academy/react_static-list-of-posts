import React from 'react';
import { UserShape } from './Shapes';

export default function User({ user }) {
  return (
    <>
      <p>
        {'Name: '}
        {user.name}
      </p>
      <p>
        {'Email: '}
        {user.email}
      </p>
      <p>
        {'Adress: '}
        {user.address.street}
      </p>
    </>
  );
}

User.propTypes = UserShape;
