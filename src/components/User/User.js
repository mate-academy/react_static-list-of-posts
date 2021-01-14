import React from 'react';
import { TypeUser } from '../../types';

export const User = ({ user }) => (
  <p>
    <span>{user.name}</span>
    {' '}
    <br />
    <span>{user.email}</span>
    {' '}
    <br />
    <span>{user.address.city}</span>
    {' '}
    <br />
  </p>
);

User.propTypes = TypeUser;
