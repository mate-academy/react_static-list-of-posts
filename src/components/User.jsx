import React from 'react';
import PropTypes from 'prop-types';

export const User = ({ user }) => (
  <>
    <h2>{user.name}</h2>
    <a href={`mailto:${user.email}`}>{user.email}</a>
    <address>{`${user.address.city}, Street: ${user.address.street}`}</address>
  </>
);

User.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    address: PropTypes.shape({
      city: PropTypes.string.isRequired,
      street: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};
