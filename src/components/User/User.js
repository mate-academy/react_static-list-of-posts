import React from 'react';
import { ShapeUser } from '../Shapes/ShapeUser';

export const User = ({ name, email, address }) => (
  <div className="user">
    <div className="user__name">
      {name}
    </div>
    <div className="user__email">
      {email}
    </div>
    <div className="user___address">
      {`${address.street} ${address.city}`}
    </div>
  </div>
);

User.propTypes = ShapeUser.isRequired;
