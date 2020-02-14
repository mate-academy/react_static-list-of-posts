import React from 'react';
import PropTypes from 'prop-types';

import './User.css';

export const User = ({ user }) => {
  const { name, email, address } = user;
  const { city } = address;

  return (
    <div className="userInfo">
      <span>{`${name} -`}</span>
      <span>{`${email} -`}</span>
      <span>{`${city} -`}</span>
    </div>
  );
};

User.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    address: PropTypes.shape({
      city: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};
