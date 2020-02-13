import React from 'react';
import PropTypes from 'prop-types';

export const User = ({ name, email, address }) => {
  const { city } = address;

  return (
    <div className="user">
      <div>{`author: ${name}`}</div>
      <div>{`e-mail: ${email}`}</div>
      <div>{`address: ${city}`}</div>
    </div>
  );
};

User.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  address: PropTypes.shape({
    city: PropTypes.string.isRequired,
    zipcode: PropTypes.string.isRequired,
  }).isRequired,
};
