import React from 'react';
import PropTypes from 'prop-types';

export const User = ({ user }) => (
  <div className="post__author">
    <h3>{user.name}</h3>
    <span>{`${user.email} ${user.address.city}`}</span>
  </div>
);

User.propTypes = {
  user: PropTypes.shape({
    email: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    address: PropTypes.shape({
      city: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};
