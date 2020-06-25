import React from 'react';
import PropTypes from 'prop-types';

import './User.css';

export const User = ({ name, email, address }) => (
  <div className="posts__author">
    <p className="posts__author-name">{name}</p>
    <p className="posts__author-email">{email}</p>
    <p className="posts__author-address">
      {`${address.city}, ${address.street} st., ${address.suite}`}
    </p>
  </div>
);

User.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  address: PropTypes.objectOf(PropTypes.any).isRequired,
};
