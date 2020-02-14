import React from 'react';
import PropTypes from 'prop-types';

export const User = ({ name, email, address }) => {
  const { city } = address;

  return (
    <div className="user">
      <p>{`author: ${name}`}</p>
      <p>{`e-mail: ${email}`}</p>
      <p>{`address: ${city}`}</p>
    </div>
  );
};

User.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  address: PropTypes.shape({
    city: PropTypes.string.isRequired,
  }).isRequired,
};
