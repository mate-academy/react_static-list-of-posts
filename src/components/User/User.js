import React from 'react';
import PropTypes from 'prop-types';
import './user.css';

const User = ({ username, email, address }) => {
  const { city } = address;

  return (
    <div className="user">
      <p>{username}</p>
      <p>{email}</p>
      <p>{city}</p>
    </div>
  );
};

User.propTypes = {
  username: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  address: PropTypes.shape({
    city: PropTypes.string.isRequired,
  }).isRequired,
};
export default User;
