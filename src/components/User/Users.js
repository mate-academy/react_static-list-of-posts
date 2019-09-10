import React from 'react';
import './Users.css';
import PropTypes from 'prop-types';

export const Users = ({ user }) => (
  <h6>{user.name}</h6>
);

Users.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string,
  }).isRequired,
};
