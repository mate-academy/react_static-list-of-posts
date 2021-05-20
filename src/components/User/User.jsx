import React from 'react';
import './User.scss';
import { UserType } from '../../types';

export const User = ({ name, email, address }) => (
  <div className="user">
    <p className="name">{name}</p>
    <p className="gray">{email}</p>
    <div className="gray">
      {`Address ${address.street} ${address.suite} ${address.city} `
      + `${address.zipcode} lat: ${address.geo.lat} lng: ${address.geo.lng}`}
    </div>
  </div>
);

User.propTypes = UserType.isRequired;
