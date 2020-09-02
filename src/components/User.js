import React from 'react';
import { Address } from './Address';
import { UserType } from './PropTypes';

export const User = ({ name, email, address }) => (
  <div className="user">
    <h3>
      {name}
    </h3>
    <p>
      {email}
    </p>
    <Address {...address} />
  </div>
);

User.propTypes = UserType.isRequired;
