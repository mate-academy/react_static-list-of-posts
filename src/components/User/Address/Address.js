import React from 'react';
import { AddressShape } from '../../../Shapes/AddressShape';

export const Address = ({ street, suite, city, zipcode, geo }) => (
  <div>
    <span>{`Street: ${street}, `}</span>
    <span>{`Suite: ${suite}, `}</span>
    <span>{`City: ${city}, `}</span>
    <span>{`Zipcode: ${zipcode}, `}</span>
    <span>{`Latitude: ${geo.lat}, `}</span>
    <span>{`Longitude: ${geo.lng}`}</span>
  </div>
);

Address.propTypes = AddressShape.isRequired;
