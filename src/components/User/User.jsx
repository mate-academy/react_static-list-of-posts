import React from 'react';
import PropTypes from 'prop-types';
import './User.css';

const User = ({ user }) => (
  <div className="user">
    <p className="user_name">
      {user.name}
    </p>
    <p className="user_email">
      {user.email.toLowerCase()}
    </p>
    <p className="user_address">
      {`city: ${user.address.city} st.: ${user.address.street}`}
    </p>
  </div>
);

User.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    address: PropTypes.string.isRequired,
  }).isRequired,
};

export default User;
