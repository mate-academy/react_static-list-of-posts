import React from 'react';
import { TypeUser } from '../../types';
import './User.scss';

export const User = ({ name, email, address }) => (
  <div className="user">
    <p className="user__name">{name}</p>
    <a
      href={`mailto:${email}`}
      className="user__email"
    >
      {email}
    </a>
    <p className="user__address">
      {`${address.suite}, ${address.street}, ${address.city}`}
    </p>
  </div>
);

User.propTypes = TypeUser.isRequired;
