import React from 'react';
import PropTypes from 'prop-types';
import './User.css';

export const User = ({ user: { name, email, address: { street, city } } }) => (
  <div className="user">
    <span className="user__name">{name}</span>
    <span className="user__email">{email}</span>
    <div className="user__address">
      <span className="user__street">{`${street} str., `}</span>
      <span className="user__city">{city}</span>
    </div>
  </div>
);

User.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    address: PropTypes.shape({
      street: PropTypes.string.isRequired,
      city: PropTypes.string.isRequired,
    }).isRequired,
  }),
}.isRequired;
