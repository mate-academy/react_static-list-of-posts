import React from 'react';
import { UsersPropTypes } from '../Type/type';
import './User.scss';

export const User = ({ name, address, email }) => (
  <div className="user__info">
    <h3 className="user__name">{name}</h3>
    <div className="user__address">
      <a className="user__email" href={`{'mailto:' + ${email}}`}>
        {email}
      </a>
      <span className="user__suite">{address.suite}</span>
      <span className="user__street">{address.street}</span>
    </div>
  </div>
);

User.propTypes = UsersPropTypes.isRequired;
