import React from 'react';
import { AddressShape } from '../Shape';

export const Address = ({ street, suite }) => (
  <>
    <p>
      {street}
      {' '}
      {suite}
    </p>
  </>
);

Address.propTypes = AddressShape.isRequired;
