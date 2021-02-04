import React from 'react';
import { UserType } from '../../types';

export const User = ({ name, email, address }) => (
  <>
    <h4>{name}</h4>
    <p>
      <i>{email}</i>
    </p>
    <address>
      {`${address.street} ${address.suite} ${address.city}`}
    </address>
  </>
);

User.propTypes = UserType;
