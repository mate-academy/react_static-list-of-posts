import React from 'react';
import PropTypes from 'prop-types';
import './User.css';

export const User = ({ person: { name, email, address } }) => (
  <div className="user">
    <h3>
      <span className="user__author">author: </span>
      { name }
    </h3>
    <p>
      <span>email: </span>
      { email }
    </p>
    <div>
      <p>adress:</p>
      <p>{address.street}</p>
      <p>{address.suite}</p>
      <p>{address.city}</p>
      <p>{address.zipcode}</p>
    </div>
  </div>
);

User.propTypes = {
  person: PropTypes.shape({
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    address: PropTypes.shape({
      street: PropTypes.string.isRequired,
      suite: PropTypes.string.isRequired,
      city: PropTypes.string.isRequired,
      zipcode: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};
