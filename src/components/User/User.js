import React from 'react';
import PropTypes from 'prop-types';

import './User.css';

export const User = (props) => {
  const { user: { name,
    email,
    address: { city, street, zipcode } } } = props;

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
    name: PropTypes.string,
    email: PropTypes.string,
    address: PropTypes.shape({
      city: PropTypes.string,
      street: PropTypes.string,
      zipcode: PropTypes.string,
    }).isRequired,
  }).isRequired,
};
