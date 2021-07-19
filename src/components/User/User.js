import React from 'react';
import PropTypes from 'prop-types';

const User = ({ name, email, address }) => (
  <div>
    <p>{name}</p>
    <p>{address.city}</p>
    <p>{email}</p>
  </div>
);

User.propTypes = {
  email: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  address: PropTypes.shape().isRequired,
};

export default User;
