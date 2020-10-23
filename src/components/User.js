import React from 'react';
import { UserShape } from './Shapes/UserShape';

export const User = ({ name, email, address }) => (
  <div className="App__user user">
    <span className="user__name">{name}</span>
    <span className="user__email">{email}</span>
    <span className="user__address">
      {
        `${address.street}, `
        + `${address.suite}, `
        + `${address.city}, `
        + `${address.zipcode}`
      }
    </span>
  </div>
);

User.propTypes = UserShape;
