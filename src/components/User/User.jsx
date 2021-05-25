import React from 'react';
import PropTypes from 'prop-types';

import './User.scss';

export const User = ({ name, email, address }) => (
  <div className="user">
    <div className="user__name">
      {name}
    </div>
    <div className="user__email">
      {email.toLowerCase()}
    </div>
    <div className="user__address">
      {address.street}
      {' '}
      {address.suite}
      {' '}
      {address.city}
    </div>
  </div>
);

User.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  address: PropTypes.shape({
    street: PropTypes.string.isRequired,
    suite: PropTypes.string.isRequired,
    city: PropTypes.string.isRequired,
  }).isRequired,
};
