import React from 'react';
import PropTypes from 'prop-types';

import './User.css';

export const User = (props) => {
  const { user: { name, email, address: { city, street, zipcode } } } = props;

  return (
    <div className="user">
      <p>Autor contacts:</p>
      <p>{`name: ${name}, email: ${email}`}</p>
      <p>{`address: ${zipcode}, ${street}, ${city}`}</p>
    </div>
  );
};

User.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    address: PropTypes.shape({
      city: PropTypes.string.isRequired,
      street: PropTypes.string.isRequired,
      zipcode: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};
