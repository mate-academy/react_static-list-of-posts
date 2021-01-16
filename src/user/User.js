import React from 'react';
import PropTypes from 'prop-types';
import { addressType } from '../types/propTypesCollection';

import './User.scss';

export const User = ({ user }) => (
  <div className="user">
    <div className="info">
      {user.name}
    </div>

    <div>
      {user.email}
    </div>

    <p>
      <span className="info">Address:</span>
      <br />
      {`${user.address.street},
      ${user.address.suite},
      ${user.address.city},
      ${user.address.zipcode}`}
    </p>
  </div>
);

User.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    address: addressType.isRequired,
  }).isRequired,
};
