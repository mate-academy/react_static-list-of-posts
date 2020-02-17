import React from 'react';
import './User.css';
import PropTypes from 'prop-types';

export const User = ({ name, email, address }) => (

  <div className="person">
    <h3>{name}</h3>
    <p>{email}</p>
    <ul className="person__address-list">
      <li>{address.street}</li>
      <li>{address.suite}</li>
      <li>{address.city}</li>
      <li>{address.zipcode}</li>
    </ul>
  </div>
);

User.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  address: PropTypes.shape({
    street: PropTypes.string,
    suite: PropTypes.string,
    city: PropTypes.string,
    zipcode: PropTypes.string,
  }).isRequired,
};
