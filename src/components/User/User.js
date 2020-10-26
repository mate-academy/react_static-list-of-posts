import React from 'react';
import { UserPropTypes } from '../PropTypes/UserPropTypes';

import './User.scss';

export const User = ({ name, email, address }) => (
  <div className="user">
    <p className="user__title">{name}</p>
    <p className="user__address">
      {`from ${address.city}`}
    </p>
    <p className="user__mail">{email}</p>
  </div>
);

User.propTypes = UserPropTypes;
