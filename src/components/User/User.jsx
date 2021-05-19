import React from 'react';
import PropTypes from 'prop-types';

import './User.css';

export const User = ({ user }) => (
  <div className="post__user">
    <p className="post__user-name">{user.name}</p>
    <p className="post__user-email">{user.email}</p>
    <p className="post__user-address">
      {`${user.address.street} ${user.address.suite} ${user.address.city}`}
    </p>
  </div>
);

const addressData = {
  street: PropTypes.string.isRequired,
  suite: PropTypes.string.isRequired,
  address: PropTypes.string.isRequired,
};

const userData = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  address: PropTypes.shape(addressData),
};

User.propTypes = {
  user: PropTypes.shape(userData).isRequired,
};
