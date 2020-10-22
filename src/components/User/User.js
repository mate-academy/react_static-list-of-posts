import React from 'react';
import './User.scss';

import { UserShape } from '../shapes/UserShape';

export const User = ({ name, email, address }) => (
  <div className="user">
    <h3>{name}</h3>
    <p>{email}</p>
    <p>
      {`${address.city}, ${address.street}, ${address.suite}`}
    </p>
  </div>
);

User.propTypes = UserShape;
