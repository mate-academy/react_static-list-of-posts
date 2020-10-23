import React from 'react';
import { UserShape } from './shapes/UserShape';

export const User = ({ name, address, email }) => (
  <div className="user">
    <p>{name}</p>
    <p>
      {`email: ${email}`}
    </p>
    <p>
      {`address: ${address.street}`}
    </p>
  </div>
);

User.propTypes = UserShape;
