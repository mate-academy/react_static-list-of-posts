import React from 'react';
import PropTypes from 'prop-types';

export const User = ({ name, email, address }) => (
  <div className="user">
    <p className="user__name">
      {name}
    </p>
    <p className="user__email">
      {email}
    </p>
    <p className="user__address">
      {address.zipcode}
      {' '}
      {address.city}
      <br />
      {address.suite}
      {' '}
      {address.street}
    </p>

  </div>
);

User.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  address: PropTypes.shape({
    street: PropTypes.string.isRequired,
    city: PropTypes.string.isRequired,
    suite: PropTypes.string.isRequired,
  }).isRequired,
};
