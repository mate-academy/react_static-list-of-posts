import React from 'react';
import PropTypes from 'prop-types';

export const User = ({ name, email, address: { city, street } }) => (
  <>
    <span>{name}</span>
    <span>{`Email: ${email}`}</span>
    <span>{`from ${street}, ${city}`}</span>
  </>
);

export const userShape = PropTypes.shape({
  email: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  address: PropTypes.shape({
    city: PropTypes.string.isRequired,
    street: PropTypes.string.isRequired,
  }).isRequired,
});

User.propTypes = { ...userShape };
