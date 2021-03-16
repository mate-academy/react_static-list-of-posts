import React from 'react';
import PropTypes from 'prop-types';

export function User({ name, email, address }) {
  return (
    <div>
      <p>{name}</p>
      <p>{email}</p>
      <div>
        <p>{address.city}</p>
        <p>{address.street}</p>
        <p>{address.suite}</p>
        <p>{address.zipcode}</p>
      </div>
    </div>
  );
}

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
