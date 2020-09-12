import React from 'react';
import PropTypes from 'prop-types';

export const User = ({ name, email, address }) => (
  <div className="post__user-info">
    <div className="user-name">
      <strong>{name}</strong>
    </div>
    <div className="user-email">
      <p>{email}</p>
    </div>
    <div className="user-address">
      <p>{address.city}</p>
      <p>{address.street}</p>
      <p>{address.suite}</p>
    </div>
  </div>
);

User.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  address: PropTypes.string.isRequired,
};
