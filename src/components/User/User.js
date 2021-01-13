import React from 'react';
import './User.scss';
import { TypeUser } from '../../types';

export const User = ({ name, email, address: { city } }) => (
  <div className="User">
    <p className="User__name">{name}</p>
    <div className="User__contacts">
      <span className="User__city">{city}</span>
      <a
        className="User__email"
        href={`mailto:${email}`}
      >
        {email.toLowerCase()}
      </a>
    </div>
  </div>
);

User.propTypes = TypeUser;
