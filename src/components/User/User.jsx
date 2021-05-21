import React from 'react';
import PropTypes from 'prop-types';

export const User = ({ name, email, address }) => (
  <div>
    <p>{name}</p>
    <p>{email}</p>
    <p>
      City:
      {address.city}
    </p>
  </div>
);

User.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  address: PropTypes.shape({
    street: PropTypes.string.isRequired,
    suite: PropTypes.string.isRequired,
    city: PropTypes.string.isRequired,
    zipcode: PropTypes.string.isRequired,
    geo: PropTypes.shape({
      lat: PropTypes.string.isRequired,
      lng: PropTypes.string.isRequired,
    }),
  }).isRequired,
};
