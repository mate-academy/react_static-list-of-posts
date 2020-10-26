import React from 'react';
import { UserShape } from '../shapes/UserShape';
import './User.scss';

export const User = ({ name, email, address }) => (
  <div className="user">
    <div>
      {name}
    </div>
    <div>
      {email}
    </div>
    <div>
      {
        `${address.city}, `
        + `${address.street}, `
        + `${address.suite}, `
        + `${address.zipcode}`
      }
    </div>
  </div>
);

User.propTypes = UserShape;
