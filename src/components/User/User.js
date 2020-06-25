import React from 'react';
import { UserShape } from '../ComponentsShapes';

export const User = ({ user }) => (
  <div>
    <b>{user.name}</b>
    <br />
    <span>{user.email}</span>
    <br />
    <span>
      {user.address.city}
      ,
      {user.address.street}
      <i>st.</i>
      <br />
      {user.address.zipcode}
    </span>
  </div>
);

User.propTypes = UserShape.isRequired;
