import React from 'react';
import { Address } from '../Address/Address';
import { UserShape } from '../Shape';

export const User = props => (
  <div>
    <Address {...props.address} />
    <p>
      {props.name}
      {' '}
      {props.email}
    </p>
  </div>
);

User.propTypes = UserShape.isRequired;
