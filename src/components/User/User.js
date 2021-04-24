import React from 'react';
import { TypeUser } from './TypeUser';

export const User = ({ user }) => (
  <div>
    <p>{user.name}</p>
    <p>{user.email}</p>
    <p>{user.address.street}</p>
    <p>{user.address.suite}</p>
    <p>{user.address.city}</p>
    <p>{user.address.zipcode}</p>
    <p>{user.address.geo.lat}</p>
    <p>{user.address.geo.lng}</p>
  </div>
);

User.propTypes = {
  user: TypeUser.isRequired,
};
