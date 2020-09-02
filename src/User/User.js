import React from 'react';
import { UserShape } from '../PropTypes';

export const User = ({ name, email, address }) => (
  <p>
    {name}
    <br />
    {email}
    <br />
    {`${address.city}, ${address.street}, ${address.suite}`}
  </p>
);

User.propTypes = UserShape;
