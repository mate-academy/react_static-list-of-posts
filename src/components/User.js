import React from 'react';
import PropTypes from 'prop-types';

export const User = ({ user }) => (
  <p>
    {`${user.name}, `}
    {`${user.email}, `}
    {`${user.address.city}, `}
    {`${user.address.street}, `}
    {`${user.address.suite}, `}
    {`${user.address.zipcode}, `}
  </p>
);

User.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    address: PropTypes.shape({
      city: PropTypes.string.isRequired,
      street: PropTypes.string.isRequired,
      suite: PropTypes.string.isRequired,
      zipcode: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};
