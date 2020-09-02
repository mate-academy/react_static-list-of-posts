import React from 'react';
import PropTypes from 'prop-types';

import './user.css';

export const User = ({ name, email, address }) => (
  <div className="user">
    <p>{name}</p>
    <p><i>{email}</i></p>
    <p><strong>{address.city}</strong></p>
  </div>
);

User.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  address: PropTypes.objectOf(
    PropTypes.shape({
      city: PropTypes.string.isRequired,
    }),
  ).isRequired,
};
