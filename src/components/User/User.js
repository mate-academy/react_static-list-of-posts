import React from 'react';
import { UserShape } from '../shapes';

export const User = ({ name, email, address: { city, street } }) => (
  <>
    <span>{name}</span>
    <span>{`e-mail: ${email}`}</span>
    <span>{`from ${street}, ${city}`}</span>
  </>
);

User.propTypes = UserShape.isRequired;
