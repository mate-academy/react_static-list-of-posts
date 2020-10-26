import React from 'react';
import { UserShape } from '../shapes/UserShape';

export const User = ({ name, email, address }) => (
  <div className="cardText">
    <div className="textMuted">
      <strong>Name: </strong>
      {name}
      <p>
        <strong> Email: </strong>
        <cite title="Source Title">
          {email}
        </cite>
      </p>

      <p>
        <strong>City: </strong>
        {address.city}
        <strong> Street: </strong>
        {address.street}
      </p>
    </div>
  </div>
);

User.propTypes = UserShape.isRequired;
