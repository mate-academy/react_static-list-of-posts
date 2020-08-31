import React from 'react';
import { UserShape } from '../Shape';
import { Address } from '../Address/Address';

export const User = ({ name, email, address }) => (
  <>
    <p>{name}</p>
    <p>{email}</p>
    <Address {...address} />
  </>
);

User.propTypes = UserShape.isRequired;
