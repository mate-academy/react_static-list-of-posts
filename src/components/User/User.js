import React from 'react';
import { userType } from '../../types';

export const User = ({ name, email, address }) => (
  <div>
    <h4>{name}</h4>
    <p>{email}</p>
    <p>{address.street}</p>
  </div>
);

User.propTypes = userType.isRequired;
