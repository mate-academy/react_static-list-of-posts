import React from 'react';
import { AddressType } from './PropTypes';

export const Address = ({ city, street, suite, zipcode }) => (
  <p>
    {`Address: ${city}, ${street}, ${suite}, ${zipcode}`}
  </p>
);

Address.propTypes = AddressType.isRequired;
