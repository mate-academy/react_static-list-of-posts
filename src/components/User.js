import React from 'react';
import { UserShape } from '../shapes/UserShape';

export const User = ({ name, email, address }) => (
  <div className="App__user user">
    <div className="user__name">{name}</div>
    <div className="user__email">{email}</div>
    <div className="user__address">
      {`${address.street}, `
      + `${address.suite}, `
      + `${address.city}, `
      + `${address.zipcode}`}
    </div>
  </div>
);

User.propTypes = UserShape;
