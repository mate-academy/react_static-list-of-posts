import React from 'react';
import { UserPropTypes } from 'prop-types';

export const User = ({ name, email, address }) => (
  <div>
    <p>{name}</p>
    <p>{email}</p>
    <p>{address.city}</p>
  </div>
);

User.propTypes = UserPropTypes;
