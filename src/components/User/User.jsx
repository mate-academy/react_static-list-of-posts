import React from 'react';
import PropTypes from 'prop-types';

import './User.scss';

export const User = ({ name, email, address }) => (
  <>
    <div className="user-info">
      <span className="user-info__name">{name}</span>
      <span className="user-info__email">{email}</span>
      <span className="user-info__address">{address.city}</span>
    </div>
  </>
);

User.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  address: PropTypes.shape({
    city: PropTypes.string,
  }).isRequired,
};
