import React from 'react';
import './User.scss';
import PropTypes from 'prop-types';

export const User = ({
  name,
  email,
  address,
}) => (
  <div className="User">
    <strong className="User__name">{name}</strong>
    <p className="User__email">{email}</p>
    <p className="User__address">
      {address.street}
      {', '}
      {address.suite}
      {', '}
      {address.city}
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
  }).isRequired,
};
