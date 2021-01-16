import React from 'react';
// import PropTypes from 'prop-types';
import { UserType } from '../types/types';
import './User.scss';

export const User = ({ name, email, address }) => (
  <div className="user">
    <strong>{name}</strong>
    <div className="user__contacts">
      <strong>
        {address.street}
        {', '}
        {address.suite}
      </strong>
      <strong>{email}</strong>
    </div>
  </div>
);

User.propTypes = UserType;
