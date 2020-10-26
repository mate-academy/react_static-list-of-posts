import React from 'react';
import PropTypes from 'prop-types';
import './User.scss';
import { AddressShape } from '../shapes/AddressShape';

export const User = ({ name, email, address }) => (
  <div className="user">
    <p className="user__name">{name}</p>
    <p className="user__email">{email}</p>
    <p className="user__address">
      {`${address.street} ${address.suite} ${address.city} ${address.zipcode}`}
    </p>
  </div>
);

User.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  address: AddressShape.isRequired,
};
