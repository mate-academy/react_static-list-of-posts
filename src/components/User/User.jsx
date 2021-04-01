import React from 'react';
import './User.scss';
import { userType } from '../../types';

export const User = ({ name, email, address }) => (
  <div className="user-info">
    <span>
      <b>{name}</b>
      {' / '}
      {email}
    </span>
    <span>
      {`${address.street} Street, ${address.suite}, ${address.city}`}
    </span>
  </div>
);

User.propTypes = userType;
