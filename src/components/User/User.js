import React from 'react';
import PropTypes from 'prop-types';
import './User.css';

export function User({ user }) {
  const { name, email, address } = user;
  const { street, city, suite } = address;

  return (
    <span>
      {`User: ${name},
      Email: ${email},
      Address: city ${city}
      str.${street} ${suite}`}
    </span>
  );
}

User.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    address: PropTypes.shape({
      city: PropTypes.string.isRequired,
      street: PropTypes.string.isRequired,
      suite: PropTypes.string.isRequired,
    }),
  }).isRequired,
};
