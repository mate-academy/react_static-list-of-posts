import React from 'react';
import PropTypes from 'prop-types';

export const User = ({ name, email, address }) => (
  <div className="user">
    <p>{name}</p>
    <p>{email}</p>
    <p>{address.city}</p>
  </div>
);

User.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  address: PropTypes.shape({
    city: PropTypes.string.isRequired,
  }).isRequired,
};
