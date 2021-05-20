import React from 'react';
import propTypes from 'prop-types';

export const User = ({name, email, address}) => {
  return (
    <div>
      <p>Name: {name}</p>
      <p>Email: {email}</p>
      <p>Ardess: {address.city}, {address.street}</p>
    </div>
  )
};

User.propTypes = {
  name: propTypes.string.isRequired,
  email: propTypes.string.isRequired,
  address: propTypes.string.isRequired,
}
