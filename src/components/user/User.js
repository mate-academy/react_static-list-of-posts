import React from 'react';
import './User.scss';
import { UserShape } from '../shapes/UserShape';

export const User = ({ name, email, address }) => (
  <div className="user">
    <div className="user__name">
      {name}
    </div>

    <div className="user__email">
      <a href={`mailto:${email}`} className="user__email--link">
        {email}
      </a>
    </div>

    <div className="user__address">
      {`
        ${address.street},
        ${address.suite},
        ${address.city},
        ${address.zipcode},
      `}
    </div>
  </div>
);

User.propTypes = UserShape;
