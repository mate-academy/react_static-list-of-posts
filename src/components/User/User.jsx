import React from 'react';
import './User.scss';
import PropTypes from 'prop-types';

export const User = ({ name, email, address }) => (
  <div className="posts__author">
    <p>
      <strong>{name}</strong>
    </p>
    <p>{email}</p>
    <p>
      `
      {address.city}
      {' '}
      {address.street}
      {' '}
      {address.suite}
      `
    </p>
  </div>
);

User.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  address: PropTypes.shape({
    street: PropTypes.string.isRequired,
    suite: PropTypes.string.isRequired,
    city: PropTypes.string.isRequired,
    zipcode: PropTypes.string.isRequired,
  }).isRequired,
};
