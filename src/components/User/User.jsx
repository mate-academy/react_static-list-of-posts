import React from 'react';
import PropTypes from 'prop-types';
import './User.scss';

export const User = ({ name, email, address }) => (
  <div className="userContainer">
    <strong>{`User: ${name}`}</strong>
    <p>{`Email: ${email}`}</p>
    <p>{`Address: ${address.city} ${address.street}`}</p>
  </div>
);

User.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  address: PropTypes.shape({
    city: PropTypes.string,
    street: PropTypes.string,
  }).isRequired,
};
