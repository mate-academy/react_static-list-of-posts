import React from 'react';
import { userType } from '../../types';

export const User = ({ name, email, address }) => (
  <>
    <h4>{name}</h4>
    <p>{email}</p>
    <p>{address.street}</p>
  </>
);

User.propTypes = userType.isRequired;
