import React from 'react';
import PropTypes from 'prop-types';

export const User = ({ user }) => (
  <>
    <span>{user.name}</span>
    <span>{user.email}</span>
  </>
);

User.propTypes = {
  user: PropTypes.objectOf(Object).isRequired,
};
