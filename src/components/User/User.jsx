import React from 'react';
import './User.scss';
import { UserTypes } from '../../propTypes/types';

export function User({ name, email, address }) {
  const receiveAddress
    = ` ${address.city}, st. ${address.street}, zip-code: ${address.zipcode}`;

  return (
    <div>
      <h3>
        <strong>Name:</strong>
        {' '}
        {name}
      </h3>
      <div className="user-email">
        <strong>Email:</strong>
        {' '}
        <a href={`mailto:${email}`}>{email}</a>
      </div>
      <div>
        <strong>Address:</strong>
        {receiveAddress}
      </div>
    </div>
  );
}

User.propTypes = UserTypes;
