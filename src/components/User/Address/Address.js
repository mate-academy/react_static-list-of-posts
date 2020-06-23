import React from 'react';
import { addressShape } from '../../../Shapes/AddressShape';

export const Address = props => (
  <div>
    <span>{`Street: ${props.street}, `}</span>
    <span>{`Suite: ${props.suite}, `}</span>
    <span>{`City: ${props.city}, `}</span>
    <span>{`Zipcode: ${props.zipcode}, `}</span>
    <span>{`Latitude: ${props.geo.lat}, `}</span>
    <span>{`Longitude: ${props.geo.lng}`}</span>
  </div>
);

Address.propTypes = addressShape.isRequired;
