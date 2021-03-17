import React from 'react';
import PropTypes from 'prop-types';

export const User = ({ user }) => (
  <ul className="users">
    <p>{user.name}</p>
    <p>{user.email}</p>
  </ul>
);

User.propTypes = PropTypes.shape({
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
}).isRequired;
