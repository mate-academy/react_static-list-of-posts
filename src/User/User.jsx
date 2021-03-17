import React from 'react';
import PropTypes from 'prop-types';

import './User.scss';

export const User = ({ user }) => (
  <div className="user">
    <span className="user__name">{user.name}</span>
    <span className="user__email">{user.email}</span>
    <span className="user__city">{user.address.city}</span>
  </div>
);

User.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string,
    email: PropTypes.string,
    address: PropTypes.shape({
      city: PropTypes.string,
    }),
  }),
};

User.defaultProps = {
  user: {
    name: null,
    email: null,
    address: {
      city: null,
    },
  },
};
