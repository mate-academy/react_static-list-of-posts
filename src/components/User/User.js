import React from 'react';
import PropTypes from 'prop-types';

import './User.css';

export const User = ({ name, email, address }) => {
  const { city } = address;

  return (
    <div className="UserInfo">
      <span>{`${name} -`}</span>
      <span>{`${email} -`}</span>
      <span>{`${city} -`}</span>
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
