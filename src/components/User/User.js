import React from 'react';

import './User.scss';
import { UserTypes } from '../../type';

export const User = ({ name, address, email }) => (
  <div className="user">
    <h3>{name}</h3>
    <div className="user__contacts">
      <a className="user__email" href={`{'mailto:' + ${email}}`}>{email}</a>
      <span className="user__city">{address.city}</span>
      <span className="user__street">{address.street}</span>
    </div>
  </div>
);

User.propTypes = UserTypes.isRequired;
