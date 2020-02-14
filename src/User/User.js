import React from 'react';
import PropTypes from 'prop-types';

export const User = ({ user }) => (
  <>
    <p>
      {user.name}
    </p>
    <p>
      {user.address.city}
    </p>
    <p>
      {user.email}
    </p>
  </>
);

User.propTypes = {
  user: PropTypes.shape({
    email: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    address: PropTypes.shape({
      city: PropTypes.string.isRequired,
    }),
  }).isRequired,
};
