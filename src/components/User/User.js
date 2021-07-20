import React from 'react';

import { UserTypes } from '../PropTypes';

export const User = ({ name, email, address }) => (
  <div>
    <p>{name}</p>
    <p>{address.city}</p>
    <p>{email}</p>
  </div>
);

User.propTypes = UserTypes;
