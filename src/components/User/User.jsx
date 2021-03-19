import React from 'react';
import './User.scss';
import { UserType } from '../../types';

export const User = ({ name, address, email }) => (
  <div className="user__info">
    <h2>{name}</h2>
    <p>{email}</p>
    <p>
      {address.city}
      {', '}
      {address.street}
      {', '}
      {address.suite}
    </p>
  </div>
);

User.propTypes = UserType;
