import React from 'react';
import { UserShape } from '../PropTypes';

export const User = ({ name, email, address }) => (
  <>
    {name}
    <br />
    {email}
    <br />
    {`${address.city}, ${address.street}, ${address.suite}`}
  </>
);

User.propTypes = UserShape;
