import React from 'react';
import PropTypes from 'prop-types';
import './User.scss';

export function User({ name, email, address }) {
  const receiveAddress
    = ` ${address.city}, st. ${address.street}, zip-code: ${address.zipcode}`;

  return (
    <div>
      <h3>
        <strong>Name:</strong>
        {' '}
        {name}
      </h3>
      <div className="user-email">
        <strong>Email:</strong>
        {' '}
        <a href={`mailto:${email}`}>{email}</a>
      </div>
      <div>
        <strong>Address:</strong>
        {receiveAddress}
      </div>
    </div>
  );
}

User.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  address: PropTypes.shape({
    street: PropTypes.string.isRequired,
    city: PropTypes.string.isRequired,
    zipcode: PropTypes.string.isRequired,
  }).isRequired,
};
