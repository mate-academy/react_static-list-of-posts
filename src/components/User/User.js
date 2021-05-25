import React from 'react';
import { TypeUser } from '../../types';

import './User.scss';

export function User({ name, email, address }) {
  return (
    <div className="user">
      <h3>{name}</h3>
      <address className="user-details">
        <a href={`mailto:${email}`}>{`Email: ${email}`}</a>
        <br />
        {`Address: ${address.city}, ${address.street}, ${address.suite}`}
      </address>
    </div>
  );
}

User.propTypes = TypeUser.isRequired;
