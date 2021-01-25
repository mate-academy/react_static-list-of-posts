import React from 'react';
import './User.scss';

import { UserType } from '../../types';

export const User = ({ name, email, address }) => (
  <div className="user">
    <h3>{name}</h3>
    <p>{email}</p>
    <p>
      {`${address.street} ${address.suite} ${address.city}`}
    </p>
  </div>
);

User.propTypes = UserType;
