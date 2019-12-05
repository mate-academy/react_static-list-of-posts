import React from 'react';
import PropTypes from 'prop-types';

const User = ({ user }) => (
  <div>
    <p>{user.name}</p>
    <p>{user.username}</p>
    <p>{user.email}</p>
    <p>{user.phone}</p>
    <p>{user.address.city}</p>
    <p>{user.address.street}</p>
    <p>{user.website}</p>
  </div>
);

User.propTypes = { user: PropTypes.arrayOf(PropTypes.object).isRequired };

export default User;
