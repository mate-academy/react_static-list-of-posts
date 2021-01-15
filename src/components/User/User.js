import React from 'react';
import PropTypes from 'prop-types';
import './User.scss';

export const User = ({ name, email, address }) => (
  <p className="user">
    <span className="user__name">{name}</span>
    {' '}
    <br />
    <span>{email}</span>
    {' '}
    <br />
    <span>{address.city}</span>
    {' '}
    <br />
  </p>
);

User.propTypes = {
  address: PropTypes.shape({
    city: PropTypes.string.isRequired,
  }).isRequired,
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
};
