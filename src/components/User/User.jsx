import React from 'react';
import './User.scss';
import { UserShape } from '../Shapes/UserShape';

export const User = ({ name, email, address }) => (
  <div className="user">
    <div className="user__name">
      {name}
    </div>

    <a href={`mailto:${email}`} className="user__email">
      {email}
    </a>

    <div className="user__address">
      {`
        ${address.street}
        ${address.suite}
        ${address.city}
        ${address.zipcode}
      `}
    </div>
  </div>
);

User.propTypes = UserShape;
