import React from 'react';
import PropTypes from 'prop-types';
import { UserType } from '../../type';
import './User.css';

export const User = ({ user }) => (
  <>
    <p>
      <span className="user-info"> author: </span>
      {` ${user.name}`}
    </p>
    <p>
      <span className="user-info"> e-mail: </span>
      {` ${user.email}`}
      <span className="user-info"> address: </span>
      {` ${user.address.city}
      , ${user.address.street}
      , ${user.address.suite};`
      }
    </p>
  </>
);

User.propTypes = {
  user: PropTypes.arrayOf(UserType).isRequired,
};
