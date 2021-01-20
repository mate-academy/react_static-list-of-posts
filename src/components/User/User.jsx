import React from 'react';
import { UserTypes } from '../../types';
import './User.scss';

export const User = ({
  name,
  email,
  address,
}) => (
  <div className="user">
    <p>{name}</p>
    <p>
      Email:
      {email}
    </p>
    <p>
      Address:
      {address.city}
      ,
      {address.street}
    </p>
  </div>
);

User.propTypes = UserTypes.isRequired;
