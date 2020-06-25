import React from 'react';
import { AddressTypes } from '../Shape/AddressTypes';

export const UserAddress = (props) => {
  const {
    street,
    suite,
    city,
    zipcode,
  } = props;

  return (
    <li className="user__item user__item--address">
      <p className="user__address-description">
        {`${street}, ${suite}, ${city}, ${zipcode}`}
      </p>
    </li>
  );
};

UserAddress.propTypes = AddressTypes;
