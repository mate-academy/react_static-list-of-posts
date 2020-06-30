import React from 'react';
import { Address } from '../Address/Address';
import { UserShape } from '../Shape';

export const User = ({ address, name, email }) => (
  <div>
    <Address {...address} />
    <p>
      {name}
      {' '}
      {email}
    </p>
  </div>
);

User.propTypes = UserShape.isRequired;
