import React from 'react';
import { UserPropTypes } from '../../propTypes/UserPropTypes';
import './User.scss';

export function User({ name, email, address }) {
  return (
    <div className="author">
      <div className="author-name">{name}</div>
      <div className="author-email">{email}</div>
      <address className="author-address">
        {`${address.street}, ${address.suite}, 
        ${address.city}, ${address.zipcode}`}
      </address>
    </div>
  );
}

User.propTypes = UserPropTypes;
