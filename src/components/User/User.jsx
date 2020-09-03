import React from 'react';
import PropTypes from 'prop-types';
import './User.scss';

export const User = ({ name, email, address }) => (
  <div className="user">
    <p className="user__name">
      {name}
    </p>
    <a
      href={`mailto:${email}`}
      className="user__email"
    >
      {email}
    </a>
    <p className="user__address">
      {address.street}
      {' '}
      {address.suite}
      <br />
      {address.city}
      {' '}
      {address.zipcode}
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
