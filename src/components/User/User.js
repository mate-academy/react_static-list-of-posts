import React from 'react';
import { TypeUser } from '../shapes/UserTypes';

export const User = ({ name, email, address }) => (
  <div className="user">
    <p className="user__name">{name}</p>
    <p className="user__email">{email}</p>
    {/* <p className="user__adress">{address.street}</p> */}
  </div>
);

User.propTypes = TypeUser;
