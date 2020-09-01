import React from 'react';
import './User.css';
import PropTypes from 'prop-types';

export const User = ({ name, email, address }) => (
  <div className="user">
    <p className="user__name">
      {`Posted by ${name}`}
    </p>
    <p className="user__email">
      {`Email: `}
      <a href={`mailto:${email}`}>{email}</a>
    </p>
    <p className="user__city">{`From: ${address.city}`}</p>
  </div>
);

User.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  address: PropTypes.shape({
    city: PropTypes.string.isRequired,
  }).isRequired,
};
