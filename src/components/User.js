import React from 'react';
import PropTypes from 'prop-types';

export const User = ({ name, address, email }) => (
  <div className="user">
    <p className="user__name">
      {`Name: `}
      {name}
    </p>
    <address className="user__address">
      {`Address: `}
      {address.zipcode}
      {address.city}
      {address.street}
      {address.suite}
    </address>
    <p className="user__email">
      {`Email: `}
      {email}
    </p>
  </div>
);

User.propTypes = {
  name: PropTypes.string.isRequired,
  address: PropTypes.shape({
    street: PropTypes.string.isRequired,
    suite: PropTypes.string.isRequired,
    city: PropTypes.string.isRequired,
    zipcode: PropTypes.string.isRequired,
  }).isRequired,
  email: PropTypes.string.isRequired,
};
