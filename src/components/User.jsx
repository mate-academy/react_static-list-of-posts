import React from 'react';
import { UserType } from '../types/types';

export const User = ({ name, email, address }) => (
  <div className="userInfo">
    <div>{name}</div>
    <div>{email}</div>
    <div>{address.city}</div>
  </div>
);

User.propTypes = UserType;
