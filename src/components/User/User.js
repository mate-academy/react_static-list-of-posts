import React from 'react';
import PropTypes from 'prop-types';
import './User.css';

export const User = ({ currentUser }) => (
  <div>
    <h3>{currentUser.name}</h3>
    <div className="user__email">
      <a href={`mailto:${currentUser.email}`}>
        {currentUser.email}
      </a>
    </div>
    <div className="address">
      <div>{currentUser.address.city}</div>
      <div>{currentUser.address.street}</div>
      <div>{currentUser.address.suite}</div>
      <div>{currentUser.address.zipcode}</div>
    </div>
  </div>
);

User.propTypes = {
  currentUser: PropTypes.shape({
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    address: PropTypes.shape({
      city: PropTypes.string.isRequired,
      street: PropTypes.string.isRequired,
      suite: PropTypes.string.isRequired,
      zipcode: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};
