import React from 'react';
import { UserShape } from '../Shapes/UserShape';
import './User.scss';

export const User = ({ name, email, address }) => (
  <div className="user">
    <h3 className="user__name">
      {name}
    </h3>
    <h3 className="user__email">
      {email}
    </h3>
    <h3 className="user__address">
      {address.street}
      {','}
      {address.suite}
      {','}
      {address.city}
    </h3>
  </div>
);

User.propTypes = UserShape;
