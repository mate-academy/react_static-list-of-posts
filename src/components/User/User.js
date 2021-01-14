import React from 'react';

import { UserType } from '../types/UserType';
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

User.propTypes = UserType;
