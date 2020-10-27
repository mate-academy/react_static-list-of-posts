import React from 'react';

import { UserShape } from '../Shapes/UserShape';

export const User = ({ name, email, address }) => (
  <div className="user-info">
    <div className="user-info__name">{name}</div>
    <div className="user-info__email">{email}</div>
    <div className="user-info__address">
      {
        `${address.street}, ${address.suite}, 
         ${address.city}, ${address.zipcode}`
      }
    </div>
  </div>
);

User.propTypes = UserShape;
