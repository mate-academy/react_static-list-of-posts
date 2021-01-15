import React from 'react';
import PropTypes from 'prop-types';
import { usersType } from '../types/propTypesCollection';

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
  user: PropTypes.shape(usersType).isRequired,
};
