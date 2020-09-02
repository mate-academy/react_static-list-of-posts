import React from 'react';
import PropTypes from 'prop-types';
import './User.scss';

export const User = ({ name, email, address }) => (
  <div className="user">
    <span>{name}</span>
    <a
      href={`mailto: ${email}`}
      className="user__email"
    >
      {email}
    </a>
    <span>{address.city}</span>
  </div>
);

User.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  address: PropTypes.shape({
    city: PropTypes.string,
  }).isRequired,
};
