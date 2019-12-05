import React from 'react';
import PropTypes from 'prop-types';

const User = ({ user }) => (
  <div className="author">
    <p className="username">
      {user.name}
    </p>
    <address className="city">
      {user.address.city}
    </address>
    <a href="{user.email}" className="link">
      {user.email}
    </a>
  </div>
);

User.propTypes = {
  user: PropTypes.shape({
    address: PropTypes.object,
    name: PropTypes.string,
    email: PropTypes.string,
  }).isRequired,
};

export default User;
