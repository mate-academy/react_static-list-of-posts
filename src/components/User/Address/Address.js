import React from 'react';
import PropType from 'prop-types';

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

Address.propTypes = {
  street: PropType.string.isRequired,
  suite: PropType.string.isRequired,
  city: PropType.string.isRequired,
  zipcode: PropType.string.isRequired,
  geo: PropType.objectOf(PropType.string).isRequired,
};
