import React from 'react';
import './User.scss';
import { UserShape } from '../shapes/UserShape';

export const User = ({ name, email, address }) => (
  <div className="user">
    <div>
      {`name: ${name}`}
    </div>

    <div>
      {'email: '}
      <a href="mailto:email">
        {email}
      </a>
    </div>

    <div>
      {`address:
        ${address.street},
        ${address.suite},
        ${address.city},
        ${address.zipcode}
      `}
    </div>
  </div>
);

User.propTypes = UserShape;
