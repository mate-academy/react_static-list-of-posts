import React from 'react';
import PropTypes from 'prop-types';
import './User.css';

export const User = ({ user }) => (
  <div className="user">
    <span>
      {user.name}
    </span>
    <span>
      {user.email}
    </span>
    <span>
      {user.address.city}
      {' '}
      {user.address.street}
      {' '}
      {user.address.suite}
      {' '}
      {user.address.zipcode}
    </span>
  </div>
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
