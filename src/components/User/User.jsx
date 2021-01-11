import React from 'react';
import PropTypes from 'prop-types';

export const User = ({ name, email, address }) => (
  <h3>User</h3>
);

User.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  address: PropTypes.objectOf(
    PropTypes.oneOfType([
      PropTypes.string.isRequired,
      PropTypes.object.isRequired,
    ]),
  ).isRequired,
};
