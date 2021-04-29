import React from 'react';
import PropTypes from 'prop-types';
import './User.scss';

export const User = ({ name, email, address }) => (
  <div className="person">
    <h2><i>{name}</i></h2>
    <p>
      <span>{address.city}</span>
      {' - '}
      <span>{address.street}</span>
    </p>
    <p>
      <span>{address.suite}</span>
      {' - '}
      <span>{address.zipcode}</span>
    </p>
    <p>{email}</p>
  </div>
);

User.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  address: PropTypes.shape({
    city: PropTypes.string.isRequired,
    street: PropTypes.string.isRequired,
    suite: PropTypes.string.isRequired,
    zipcode: PropTypes.string.isRequired,
  }).isRequired,
};
