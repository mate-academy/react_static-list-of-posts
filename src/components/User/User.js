import React from 'react';
import { TypeUser } from '../../types';
import './User.scss';

export const User = ({ user }) => (
  <p className="user">
    <span className="user__name">{user.name}</span>
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
