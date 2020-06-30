import React from 'react';
import { ShapeUser } from '../Shapes';

export const User = ({ name, email, address }) => (
  <div>
    <span>
      <span>Name: </span>
      {name}
    </span>
    <span>
      <span>Email: </span>
      {email}
    </span>
    <br />
    <span>Address: </span>
    <span>{address.city}</span>
    <span>{address.street}</span>
    <span>{address.suite}</span>
    <span>{address.zipcode}</span>
    <br />
    <span>Location: </span>
    <span>{address.geo.lat}</span>
    <span>{address.geo.lng}</span>
  </div>
);

User.propTypes = ShapeUser.isRequired;
