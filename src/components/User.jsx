import React from 'react';
import { PropTypes } from 'prop-types';

export function User({ user }) {
  return (
    <div className="user">
      {'User: '}
      {user.name}
      {' Email: '}
      {user.email}
      <div>
        {' Address: '}
        {user.address.city}
        {', '}
        {user.address.street}
        .
        {' Zip Code: '}
        {user.address.zipcode}
      </div>
    </div>
  );
}

User.propTypes = {
  user: PropTypes.shape({
    address: PropTypes.shape(
      PropTypes.shape({
        city: PropTypes.string.isRequired,
        street: PropTypes.string.isRequired,
        zipcode: PropTypes.string.isRequired,
      }),
    ).isRequired,
    email: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired,
};
