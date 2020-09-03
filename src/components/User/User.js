import React from 'react';
import PropTypes from 'prop-types';

export const User = ({ name, email, address }) => (
  <div>
    <h4>{name}</h4>
    <p>
      Email:
      {email}
    </p>
    <p>
      Address:
      {address.city}
      ,
      {address.street}
      ,
      {address.suite}
    </p>
  </div>
);

User.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  address: PropTypes.shape({
    city: PropTypes.string.isRequired,
    street: PropTypes.string.isRequired,
    suite: PropTypes.string.isRequired,
  }).isRequired,
};
