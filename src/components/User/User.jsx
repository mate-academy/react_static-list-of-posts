import React from 'react';
import { UserShape } from '../../shapes/UserShape';

export const User = ({ name, email, address: { city, street, suite } }) => (
  <div className="card-body d-flex justify-content-between">
    <p>{ name }</p>
    <span>{ email }</span>
    <span>{ `${city}, ${street}, ${suite}`}</span>
  </div>
);

User.propTypes = UserShape;
