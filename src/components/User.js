import React from 'react';
import PropTypes from 'prop-types';

export default function User({ user }) {
  return (
    <>
      <p>
        {'Name: '}
        {user.name}
      </p>
      <p>
        {'Email: '}
        {user.email}
      </p>
      <p>
        {'Adress: '}
        {user.address.street}
      </p>
    </>
  );
}

User.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    address: PropTypes.shape({
      street: PropTypes.string,
    }).isRequired,
  }).isRequired,
};
