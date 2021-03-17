import React from 'react';
import PropTypes from 'prop-types';
import './user.scss';

export const User = ({
  name,
  email,
  address,
}) => (
  <div className="user">
    <span>
      <p>{name}</p>
      <p>{email}</p>
    </span>
    <span className="user__contacts">
      <p>{address.street}</p>
      <p>{address.suite}</p>
      <p>{address.city}</p>
      <p>{address.zipcode}</p>
    </span>
  </div>
);

User.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  address: PropTypes.shape({
    street: PropTypes.string.isRequired,
    suite: PropTypes.string.isRequired,
    city: PropTypes.string.isRequired,
    zipcode: PropTypes.string.isRequired,
  }).isRequired,
};
