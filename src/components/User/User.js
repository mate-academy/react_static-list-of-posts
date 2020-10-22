import React from 'react';
import PropTypes from 'prop-types';

const User = ({ user }) => {
  const { name, email, address } = user;

  return (
    <>
      <p>{name}</p>
      <p>{email}</p>
      <p>
        {address.suite}
        ,
        {' '}
        {address.street}
        ,
        {' '}
        {address.city}
        ,
        {' '}
        {address.zipcode}
      </p>
    </>
  );
};

User.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    address: PropTypes.shape({
      suite: PropTypes.string.isRequired,
      street: PropTypes.string.isRequired,
      city: PropTypes.string.isRequired,
      zipcode: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

export default User;
