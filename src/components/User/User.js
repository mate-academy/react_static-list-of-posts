import React from 'react';
import './User.scss';

import { userTypes } from '../../types';

export const User = ({ user }) => (
  <div className="user">
    <p className="user__name">{user.name}</p>
    <p className="user__email">{user.email}</p>
    <p className="user__address">
      {user.address.city}
      ,
      {' '}
      {user.address.street}
    </p>
  </div>
);

User.propTypes = userTypes.isRequired;
