import React from 'react';
import PropTypes from 'prop-types';

export const User = ({ user }) => {
  const { name, email, address } = user;
  const { street, suite, city, zipcode, geo } = address;
  const { lat, lng } = geo;

  return (
    <div>
      <h3>{name}</h3>
      <p>{email}</p>
      <p>
        {`${street}, ${suite},
        ${city}, ${zipcode}, ${lat}, ${lng}`}
      </p>
    </div>
  );
};

User.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string,
    email: PropTypes.string,
    address: PropTypes.shape({
      street: PropTypes.string,
      suite: PropTypes.string,
      city: PropTypes.string,
      zipcode: PropTypes.string,
      geo: PropTypes.shape({
        lat: PropTypes.string,
        lng: PropTypes.string,
      }),
    }),
  }).isRequired,
};
