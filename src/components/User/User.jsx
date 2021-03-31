import React from 'react';
import PropTypes from 'prop-types';

import './user.scss';

export const User = ({
  name,
  email,
  address,
}) => (
  <div className="user">
    <div className="user__image">
      <img
        src="https://img.icons8.com/dusk/100/000000/cat-profile.png"
        alt="profile"
      />
    </div>
    <strong className="user__name">{name}</strong>
    <p className="user__email">
      <strong>Login:</strong>
      {' '}
      {email}
    </p>
    <p className="user__city">
      <strong>City:</strong>
      {' '}
      {address.city}
    </p>
  </div>
);

User.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  address: PropTypes.shape({
    city: PropTypes.string.isRequired,
  }).isRequired,
};
