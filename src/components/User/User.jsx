import React from 'react';
import PropTypes from 'prop-types';

import './User.scss';

export const User = ({ user }) => (
  <div className="info">
    <p className="info__name">
      {user.name}
    </p>
    <a href={`mailto: ${user.email}`} className="info__email-link">
      {user.email}
    </a>
    <p className="info__address">
      {`${user.address.city}, ${user.address.street}`}
    </p>
  </div>
);

User.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    address: PropTypes.shape().isRequired,
  }).isRequired,
};
