import React from 'react';
import { UserShape } from '../../shapes/UserShape';
import './User.scss';

export const User = ({ name, address, email }) => (
  <ul className="user">
    <li>
      {name}
    </li>
    <li>
      {`email: ${email}`}
    </li>
    <li>
      {
        `${address.street} ${address.suite} ${address.city} ${address.zipcode}`
      }
    </li>
  </ul>
);

User.propTypes = UserShape;
