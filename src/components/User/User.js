import React from 'react';
import PropTypes from 'prop-types';

import './user.scss';

const User = ({ user }) => (
  <div className="user">
    <div className="user__name">{user.name}</div>
    <div className="user__email">{user.email}</div>
    <div className="user__address">
      {user.address.street}
    </div>
  </div>
);

User.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    address: PropTypes.shape({
      street: PropTypes.string.isRequired,
      suite: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

export { User };
