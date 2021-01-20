import React from 'react';
import { UserTypes } from '../../types';
import './User.scss';

export const User = ({
  name,
  email,
  address,
}) => (
  <div className="user">
    {name}
    ,
    {email}
    <br />
    {address.street}
  </div>
);

User.propTypes = UserTypes.isRequired;
