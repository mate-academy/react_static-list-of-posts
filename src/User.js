import React from 'react';
import { UserTypes } from './types';

export const User = ({ name, email, address }) => (
  <>
    <strong>{name}</strong>
    <p>{email}</p>
    <i>
      {`${address.suite} ${address.street}`}
    </i>
  </>
);

User.propTypes = UserTypes.isRequired;
