import React from 'react';
import './User.scss';
import PropTypes from 'prop-types';

export const User = ({ name, email }) => (
  <>
    <p className="user-name">{name}</p>
    <p className="user-email">{email}</p>
  </>
);

User.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
};
