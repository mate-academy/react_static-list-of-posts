import React from 'react';
import PropTypes from 'prop-types';

export const User = ({ name, email, address }) => (
  <div className="posts__user d-flex justify-content-evenly">
    <p className="posts__name">{name}</p>
    <p className="posts__email">{email}</p>
    <p className="posts__address">
      {address.street}
      {`, `}
      {address.suite}
    </p>
  </div>
);

User.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  address: PropTypes.shape({
    street: PropTypes.string.isRequired,
    suite: PropTypes.string.isRequired,
  }).isRequired,
};
