import React from 'react';
import PropTypes from 'prop-types';

const User = ({ user }) => {
  const { name, email, address } = user;

  return (
    <>
      <h3>
        {'Written by: '}
        {name}
      </h3>
      <p>
        {'Email: '}
        {email}
      </p>
      <p>
        {'Address: '}
        {address.city}
        {' '}
        {address.street}
        {' '}
        {address.suite}
      </p>
    </>
  );
};

User.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    address: PropTypes.shape({
      street: PropTypes.string.isRequired,
      city: PropTypes.string.isRequired,
      suite: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

export default User;
