import React from 'react';
import PropTypes from 'prop-types';

import { typeUserAdress } from '../../types';
import './User.scss';

export const User = ({ user }) => (
  <div className="user">
    <span>
      <b>name:</b>
      {' '}
      {user.name}
    </span>
    <span>
      <b>email:</b>
      {' '}
      {user.email}
    </span>
    <span>
      <b>address:</b>
      <br />
      {user.address.city}
      <br />
      {user.address.street}
      <br />
      {user.address.suite}
    </span>
  </div>
);

User.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    address: typeUserAdress.isRequired,
  }).isRequired,
};
