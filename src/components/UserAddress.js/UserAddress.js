import React from 'react';
import { AddressTypes } from '../Shape/AddressTypes';

export const UserAddress = props => (
  <li className="user__item user__item--address">
    <p className="user__address-description">
      {`${props.street}, ${props.suite}, ${props.city}, ${props.zipcode}`}
    </p>
  </li>
);

UserAddress.propTypes = AddressTypes;
