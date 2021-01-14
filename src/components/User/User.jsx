import React from 'react';
import { TypeUser } from '../../types';

import './User.scss';

export const User = ({ name, email, address }) => (
  <div className="User">
    <p className="User__name">{name}</p>
    <a
      href={`mailto:${email}`}
      className="User__email"
    >
      {email}
    </a>
    <p className="User__address">
      {`${address.suite}, ${address.street}, ${address.city}`}
    </p>
  </div>
);

User.propTypes = TypeUser.isRequired;
