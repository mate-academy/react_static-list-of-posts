import React from 'react';
import './User.css';
import PropTypes from 'prop-types';

export const User = ({ name, email, address }) => {
  const { city } = address;

  return (
    <ul className="user-info">
      <li className="user-info__part">{name}</li>
      <li className="user-info__part">
        <a href="`{email}`" className="email">{email}</a>
      </li>
      <li className="user-info__part">{city}</li>
    </ul>
  );
};

User.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  address: PropTypes.shape({
    city: PropTypes.string.isRequired,
  }).isRequired,
};
