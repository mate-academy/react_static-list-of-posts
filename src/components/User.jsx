import React from 'react';
import { UserType } from './Types';

export const User = ({ user }) => (
  <div>
    {user.name}
    <br />
    {user.email}
    <br />
    Address:
    {' '}
    {user.address.street}
    ,
    {' '}
    {user.address.suite}
    ,
    {' '}
    {user.address.city}
    <br />
    {user.address.zipcode}
  </div>
);

User.propTypes = UserType.isRequired;
