import React from 'react';

import { UserShape } from '../shapes/UserShape';
import './User.scss';

export const User = ({ name, email, address }) => (
  <div className="user">
    <strong>{name}</strong>
    <div className="user__contacts">
      <strong>
        {address.street}
        {', '}
        {address.suite}
      </strong>
      <strong>{email}</strong>
    </div>
  </div>
);

User.propTypes = UserShape;
