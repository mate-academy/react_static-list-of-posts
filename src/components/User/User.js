import React from 'react';
import './User.css';
import PropTypes from 'prop-types';

export const User = ({ person }) => (
  <div className="person">
    <h3>{person.name}</h3>
    <p>{person.email}</p>
    <ul className="person__address-list">
      <li>{person.address.street}</li>
      <li>{person.address.suite}</li>
      <li>{person.address.city}</li>
      <li>{person.address.zipcode}</li>
    </ul>
  </div>
);

User.propTypes = {
  person: PropTypes.shape({
    name: PropTypes.string,
    email: PropTypes.string,
    address: PropTypes.shape({
      street: PropTypes.string,
      suite: PropTypes.string,
      city: PropTypes.string,
      zipcode: PropTypes.string,
    }).isRequired,
  }).isRequired,
};
