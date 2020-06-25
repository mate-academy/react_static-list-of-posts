import React from 'react';

import { ShapeUser } from '../Shapes';

export const User = ({ name, email, address }) => (
  <p className="user__info">
    {name}
    <br />
    <a href={`mailto:${{ email }}`}>
      {email}
    </a>
    <br />
    {address.city}
    <br />
    {address.street}
  </p>
);

User.propTypes = ShapeUser.isRequired;
