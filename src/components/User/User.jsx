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
  address: PropTypes.shape.isRequired,
};
