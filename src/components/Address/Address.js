import React from 'react';
import { AdressShape } from '../Shape';

export const Address = ({ street, suite, city, zipcode }) => (
  <p>
    {`${street}, ${suite}, ${city}, ${zipcode}`}
  </p>

);

Address.propTypes = AdressShape.isRequired;
