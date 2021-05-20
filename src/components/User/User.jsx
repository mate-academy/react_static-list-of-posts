import React from 'react';
import PropTypes from 'prop-types';

import './User.scss';

export const User = ({ name, email, address }) => (
  <div className="user">
    <span>{name}</span>
    <span>{email}</span>
    <span>{`${address.city}, ${address.street}`}</span>
  </div>
);

User.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  address: PropTypes.shape({
    city: PropTypes.string.isRequired,
    street: PropTypes.string.isRequired,
  }).isRequired,
};
