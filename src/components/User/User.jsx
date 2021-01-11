import React from 'react';
import PropTypes from 'prop-types';

import './User.scss';

export const User = ({ name, email, address }) => (
  <div>
    <span className="user_name">{name}</span>
    <br />
    <span className="user_email-label">Email: </span>
    <span className="user_email">{email}</span>
    <br />
    <span className="user_city-label">City: </span>
    <span className="user_city">{address.city}</span>
  </div>
);

User.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  address: PropTypes.objectOf(
    PropTypes.oneOfType([
      PropTypes.string.isRequired,
      PropTypes.object.isRequired,
    ]),
  ).isRequired,
};
