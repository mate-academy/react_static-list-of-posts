import React from 'react';
import { UserShape } from '../../shapes/UserShape';
import './User.scss';

export const User = ({ name, email, address }) => (
  <div className="user">
    <div className="user__name">
      name:
      {name}
    </div>
    <div className="user__email">
      email:
      {email}
    </div>
    <div className="user__address">
      address:
      {address.suite}
      ,
      {address.street}
      ,
      {address.city}
    </div>
  </div>
);

User.propTypes = UserShape;
