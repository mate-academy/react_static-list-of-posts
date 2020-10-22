import React from 'react';
import { UserShape } from '../shapes/UserShape';

export const User = ({ name, email, address }) => (
  <div className="App__user">
    <div className="user__name">
      {name}
    </div>
    <div className="user__email">
      {email}
    </div>
    <div className="user__address">
      {
        `${address.city}, `
        + `${address.street}, `
        + `${address.suite}`
      }
    </div>
  </div>
);

User.propTypes = UserShape;
