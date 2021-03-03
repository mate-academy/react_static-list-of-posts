import React from 'react';

import './User.css';
import { UserType } from '../Types';

export const User = ({ name, email, address }) => (
  <div className="user">
    <div className="name">{`Name: ${name}`}</div>
    <div className="email">{`Email: ${email}`}</div>
    Address:
    <div className="address">
      <div className="city">{`City: ${address.city}`}</div>
      <div className="street">{`Street: ${address.street}`}</div>
      <div className="suite">{`Suite: ${address.suite}`}</div>
    </div>
  </div>
);

User.propTypes = UserType;
