import React from 'react';
import PropTypes from 'prop-types';

export const User = ({ name, email, address }) => (
  <p>
    {name}
    /
    {email}
    /
    {address.city}
    {address.street}
    {address.suite}
  </p>
);

export const userType = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  address: PropTypes.shape({
    city: PropTypes.string.isRequired,
    street: PropTypes.string.isRequired,
    suite: PropTypes.string.isRequired,
  }).isRequired,
};

User.propTypes = userType;
