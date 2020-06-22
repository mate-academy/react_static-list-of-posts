import React from 'react';
import { ShapeAddress } from '../Shapes/ShapeUser';

export const Address = ({ address }) => (
  <div>
    <ul>
      <li>{address.street}</li>
      <li>{address.suite}</li>
      <li>{address.city}</li>
      <li>{address.zipcode}</li>
    </ul>
  </div>
);

Address.propTypes = ShapeAddress.isRequired;
