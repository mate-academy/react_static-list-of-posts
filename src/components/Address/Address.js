import React from 'react';
import { AdressShape } from '../Shape';

export const Address = props => (
  <p>
    {`${props.street}, ${props.suite}, ${props.city}, ${props.zipcode}`}
  </p>

);

Address.propTypes = AdressShape.isRequired;
