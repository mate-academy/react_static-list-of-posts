import React from 'react';
import PropTypes from 'prop-types';

const User = ({ user }) => (
  <p className="post__author">
    <span>{user.name}</span>
    <br />
    <span>{user.email}</span>
    <address>{user.address.city}</address>
  </p>
);

User.propTypes = { user: PropTypes.arrayOf(PropTypes.object).isRequired };

export default User;
