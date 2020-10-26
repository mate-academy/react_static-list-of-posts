import React from 'react';
import { UserShape } from '../shapes/UserShape';
import './User.scss';

export const User = ({ name, email, address }) => (
  <div className="user">
    <div className="user__name">
      {name}
    </div>
    <div className="email">
      {email}
    </div>
    <div className="address">
      {
        `${address.city}, ${address.street}, ${address.zipcode}`
      }
    </div>
  </div>
);

User.propTypes = UserShape;
