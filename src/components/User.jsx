import React from 'react';

import './User.scss';
import { UserShape } from './Shape';

export const User = user => (
  <div>
    <span className="Username">{user.name}</span>
    <br />
    <span>
      From:
      {user.address.city}
    </span>
    <br />
    <span>{user.email}</span>
  </div>
);

User.propTypes = UserShape;
