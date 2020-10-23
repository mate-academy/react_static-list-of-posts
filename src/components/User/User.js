import React from 'react';
import { UserShape } from '../shapes/UserShape';

import './User.scss';

export const User = ({ name, email, address }) => (
  <div className="User">
    <p>
      <span className="User__label">Name:</span>
      {name}
    </p>
    <p>
      <span className="User__label">Email:</span>
      {email}
    </p>
    <p>
      <span className="User__label">City:</span>
      {address.city}
    </p>
    <p>
      <span className="User__label">Street:</span>
      {address.street}
    </p>
  </div>
);

User.propTypes = UserShape;
